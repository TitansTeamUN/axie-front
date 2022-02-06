import { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useRouteMatch } from "react-router";

import { GetAxieDetail } from "../graphql/queries/axie";

import {
  getAxieGenefromHex,
  getAxieImgFromId,
  getBreedAxieGenes,
} from "../utils";
import Header from "../components/Basic/Header";
import BreedingResultTable from "../components/breedingResultTable/BreedingResultTable";

const BreedingResult = () => {
  const match = useRouteMatch<any>();
  const { idOne: axieIdOne, idTwo: axieIdTwo } = match.params;
  const [axieDetailsData, setAxieDetailsData] = useState<any>({
    dataOne: {},
    dataTwo: {},
  });

  const {
    data: dataOne,
    loading: loadingOne,
    error: errorOne,
    refetch: refetchOne,
  } = useQuery(GetAxieDetail, {
    variables: { axieId: axieIdOne },
    onCompleted: (data) => {
      const { dataTwo } = axieDetailsData;
      setAxieDetailsData({ dataOne: data.axie, dataTwo });
      //console.log(data);
    },
    fetchPolicy: "no-cache",
    onError: (error) => {
      console.log(error);
      console.log("refetching Query #1");
      refetchOne();
    },
  });

  const {
    data: dataTwo,
    loading: loadingTwo,
    error: errorTwo,
    refetch: refetchTwo,
  } = useQuery(GetAxieDetail, {
    variables: { axieId: axieIdTwo },
    onCompleted: (data) => {
      const { dataOne } = axieDetailsData;
      setAxieDetailsData({ dataOne, dataTwo: data.axie });
      //console.log(data);
      //console.log(getAxieGenefromHex(256, data.axie.genes));
    },
    onError: (error) => {
      console.log(error);
      console.log("refetching Query #2");
      refetchTwo();
    },
    fetchPolicy: "no-cache",
  });

  const isDataFetched =
    Object.keys(axieDetailsData.dataOne).length !== 0 &&
    Object.keys(axieDetailsData.dataTwo).length !== 0 &&
    !loadingOne &&
    !loadingTwo;

  const getNewAxieGenes = () => {
    const genesOne = getAxieGenefromHex(
      256,
      axieDetailsData.dataOne.genes
    ).genes;
    const genesTwo = getAxieGenefromHex(
      256,
      axieDetailsData.dataTwo.genes
    ).genes;
    return getBreedAxieGenes(genesOne, genesTwo);
  };

  let newGenes: any = {};

  if (isDataFetched) {
    newGenes = getNewAxieGenes();
  }

  const capitalizeFirstChar = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  return (
    <IonPage>
      <Header menu="menuBreeding" title="Breeding results" />
      <IonContent fullscreen color="primary">
        <div className="flex flex-col px-6 mt-6">
          {Object.keys(newGenes).length !== 0 && (
            <div
              className={`flex justify-center border border-black rounded-md px-2 py-1 bg-cl${capitalizeFirstChar(
                newGenes.cls
              )}`}
            >
              <p>{`${capitalizeFirstChar(newGenes.cls)}`}</p>
            </div>
          )}
          <IonGrid className="flex justify-center">
            <IonRow className="flex justify-center">
              <IonCol size="5">
                {/*<IonImg
                  src={getAxieImgFromId(
                    Math.floor(
                      Math.random() *
                        (Math.ceil(8000000) - Math.ceil(4000000)) +
                        Math.ceil(4000000)
                    )
                  )}
                    ></IonImg>9*/}
              </IonCol>
            </IonRow>
          </IonGrid>
          {Object.keys(newGenes).length !== 0 && (
            <BreedingResultTable breedAxieGenes={newGenes} />
          )}

          {Object.keys(newGenes).length !== 0 && (
            <div className="border-2 border-indigo-500/50 rounded-md my-10">
              <div className="grid grid-cols-1 justify-items-center rounded-md py-6 bg-onyx">
                <div>
                  <p>Gene Quality: {newGenes.geneQualityPercentage}%</p>
                </div>
              </div>
            </div>
          )}
          <IonButton href="/breeding" color="tertiary" className="justify-end">
            Breed again
          </IonButton>
        </div>
        <IonLoading
          isOpen={loadingOne || loadingTwo}
          message={"Loading Axie Data, please wait..."}
        ></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default BreedingResult;
