import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/Basic/ExploreContainer";
import BreedingResultScore from "../components/breedingResultScore/BreedingResultScore";
import BreedingResultTable from "../components/breedingResultTable/BreedingResultTable";
import Header from "../components/header/Header";
import MyAxiesCard from "../components/myAxies/MyAxiesCard";

const AxiesSearch = () => {
  const myAxies = [
    {
      _id: "#9854654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 7521,
      value: "$150",
    },
    {
      _id: "#5454654",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 434,
      value: "$4",
    },
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 43543,
      value: "$466",
    },
    {
      _id: "#456456456",
      image:
        "https://mundotrucos.com/wp-content/uploads/2021/07/Reptile-Tail-Wall-Gecko-1024x768-2.png",
      score: 42,
      value: "$4535",
    },
  ];

  return (
    <div>
      <IonPage>
        <Header title="Axies search" />
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonSearchbar></IonSearchbar>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              {myAxies.map((el) => {
                return (
                  <IonCol size="6">
                    <MyAxiesCard
                      _id={el._id}
                      image={el.image}
                      score={el.score}
                      value={el.value}
                      myAxie={false}
                    ></MyAxiesCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default AxiesSearch;
