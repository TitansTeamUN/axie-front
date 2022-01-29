import { useQuery } from "@apollo/client";
import { IonButton, IonContent, IonPage, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";
import MyAxiesCard from "../components/myAxies/MyAxiesCard";
import { GetAxieBriefList } from "../graphql/queries/axie";
import { getAxies } from "../graphql/queries/getAxies";

const AxiesSearch = () => {
  const [myAxies, setMyAxies] = useState([
    {
      id: "",
      name: "",
      class: "",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "Ξ 0.019",
      breedCount: 0,
    },
  ]);

  const [search, setSearch] = useState("");
  const [myAxiesArray, setMyAxiesArray] = useState([] as any);
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GetAxieBriefList, {
    variables: {
      from: page,
      size: 24,
      sort: "PriceAsc",
      auctionType: "Sale",
      owner: null,
      criteria: {
        region: null,
        parts: null,
        bodyShapes: null,
        classes: null,
        stages: null,
        numMystic: null,
        pureness: null,
        title: null,
        breedable: null,
        breedCount: null,
        hp: [],
        skill: [],
        speed: [],
        morale: [],
        purity: [],
        numJapan: null,
        numXmas: null,
      },
      filterStuckAuctions: false,
    },
    onCompleted: (data) => {
      const axiesData = data.axies.results;
      setMyAxiesArray(axiesData);
    },
  });
  if (data) console.log(data);
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleBefore = () => {
    setPage(page - 1);
    toTop();
  };
  const handleAfter = () => {
    setPage(page + 1);
    toTop();
  };
  return (
    <div>
      <IonPage>
        <Header menu="menuAxiesSearch" title="Axies search" />
        <IonContent fullscreen color="primary">
          <IonSearchbar
            color="light"
            onIonChange={(e) => {
              setSearch(e.detail.value!);
            }}
          />
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IonButton
              onClick={() => {
                handleBefore();
              }}
              disabled={page === 0}
            >
              Anterior
            </IonButton>
            <p>{page}</p>
            <IonButton
              onClick={() => {
                handleAfter();
              }}
            >
              Siguiente
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default AxiesSearch;
