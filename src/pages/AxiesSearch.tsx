import { useQuery } from "@apollo/client";
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Header from "../components/Basic/Header";
import FiltersAxiesSearch from "../components/filtersAxiesSearch/FiltersAxiesSearch";
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
  const [showFilters, setShowFilters] = useState(false);

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
    <>
      <FiltersAxiesSearch
        showModal={showFilters}
        setMyAxiesArray={setMyAxiesArray}
        page={page}
        setShowModal={setShowFilters}
      />
      <div>
        <IonPage>
          <Header menu="menuAxiesSearch" title="Axies search" />
          <IonContent fullscreen color="primary">
            <IonRow>
              <IonSearchbar
                color="light"
                onIonChange={(e) => {
                  setSearch(e.detail.value!);
                }}
              />
              <IonButton
                onClick={() => setShowFilters(true)}
                color="tertiary"
                className="w-full text-lg mt-2"
              >
                Filtros
              </IonButton>
            </IonRow>
            <div className="grid grid-cols-2">
              {myAxiesArray.map((axie) => {
                return (
                  <MyAxiesCard
                    key={axie.id}
                    _id={axie.id}
                    image={axie.image}
                    score={"1234"}
                    value={
                      axie.auction === null
                        ? null
                        : axie.auction.currentPriceUSD
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
                color="tertiary"
                disabled={page === 0}
              >
                Anterior
              </IonButton>
              <p>{page + 1}</p>
              <IonButton
                onClick={() => {
                  handleAfter();
                }}
                color="tertiary"
              >
                Siguiente
              </IonButton>
            </div>
          </IonContent>
        </IonPage>
      </div>
    </>
  );
};

export default AxiesSearch;
