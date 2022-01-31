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

import { getAxieGenefromHex, getBreedAxieGenes } from "../utils";
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

  const breedingResult = {
    image:
      "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
    height: "14px",
    width: "14px",
    breedingResult: [
      ["Lucas", "Confused", "Scar"],
      ["Rosa", "Clover", "Clover"],
      ["Shiitake", "Pumpkin", "Mint"],
      ["Serious", "Serious", "Goda"],
      ["Beech", "Leaf Bug", "Beech"],
      ["Carrot", "Hot Butt", "Patato Leaf"],
    ],
    breedingResultScore: { Score: "Decent", ScoreArray: [58, 34, 31, 41] },
    geneQuality: "81.29%",
  };

  return (
    <IonPage>
      <Header menu="menuBreeding" title="Breeding results" />
      <IonContent fullscreen color="primary">
        <div className="flex flex-col px-6 mt-6">
          <IonGrid className="flex justify-center">
            <IonRow className="flex justify-center">
              <IonCol size="4">
                <IonImg src={breedingResult.image}></IonImg>
              </IonCol>
            </IonRow>
          </IonGrid>
          {Object.keys(newGenes).length !== 0 && (
            <BreedingResultTable breedAxieGenes={newGenes} />
          )}

          {Object.keys(newGenes).length !== 0 && (
            <div className="border-2 border-indigo-500/50 rounded-md my-10">
              <div className="grid grid-cols-1 justify-items-center rounded-md py-6 bg-sonicSilver">
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
