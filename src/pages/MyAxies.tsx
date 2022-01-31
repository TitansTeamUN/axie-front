import {
  IonContent,
  IonInput,
  IonPage,
  IonSearchbar,
  IonLoading,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Basic";
import { useQuery } from "@apollo/client";
import { GetAxieBriefList } from "../graphql/queries/axie";

import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const MyAxies = () => {
  const [search, setSearch] = useState("");
  const [roninId, setRoninId] = useState("");
  const [myAxiesArray, setMyAxiesArray] = useState<any>([]);

  const { loading, error, data } = useQuery(GetAxieBriefList, {
    variables: {
      auctionType: "All",
      criteria: {
        bodyShapes: null,
        breedable: null,
        breedCount: null,
        classes: null,
        hp: [],
        morale: [],
        numJapan: null,
        numMystic: null,
        numXmas: null,
        parts: null,
        pureness: null,
        purity: [],
        region: null,
        skill: [],
        speed: [],
        stages: null,
        title: null,
      },
      from: 0,
      owner: roninId,
      size: 24,
      sort: "IdDesc",
    },
    skip: !/0x([0-9]|[a-f]){40}$/.test(roninId), //Only perform if matches the regexp of a RoninID
    onCompleted: (data) => {
      const axiesData = data.axies.results;
      setMyAxiesArray(axiesData);
    },
  });
  if (error) console.log(error);
  if (loading) console.log("loading");
  if (data) console.log(data);

  /*useEffect(() => {
    let aux = [] as any;
    myAxies.forEach((axie) => {
      if (axie._id.includes(search)) {
        aux.push(axie);
        setMyAxiesArray(aux);
      }
    });
  }, [search]);*/

  return (
    <IonPage>
      <Header menu="menuMyAxies" title="My Axies" />
      <IonContent fullscreen color="primary">
        <div className="px-2 mt-2">
          <div className="bg-white rounded-sm w-full ">
            <IonInput
              type="text"
              name="roninid"
              placeholder="Ronin ID"
              className="text-black text-center"
              maxlength={42}
              debounce={400}
              value={roninId}
              onIonChange={(e) => {
                setRoninId(e.detail.value!);
              }}
            ></IonInput>
          </div>
        </div>
        <IonLoading isOpen={loading} message={"Loading Data..."}></IonLoading>

        <IonSearchbar
          hidden={true}
          color="light"
          onIonChange={(e) => {
            setSearch(e.detail.value!);
          }}
        />
        {data && (
          <div className="grid grid-cols-2">
            {myAxiesArray.map((axie) => {
              return (
                <MyAxiesCard
                  key={axie.id}
                  _id={axie.id}
                  image={axie.image}
                  score={"1234"}
                  value={
                    axie.auction === null ? null : axie.auction.currentPriceUSD
                  }
                  axieClass={axie.class}
                  breedCount={axie.breedCount}
                />
              );
            })}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MyAxies;
