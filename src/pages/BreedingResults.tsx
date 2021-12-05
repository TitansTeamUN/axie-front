import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/Basic/ExploreContainer";
import BreedingResultScore from "../components/breedingResultScore/BreedingResultScore";
import BreedingResultTable from "../components/breedingResultTable/BreedingResultTable";
import Header from "../components/header/Header";

const breedingResult = () => {
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
    <div>
      <IonPage>
        <Header title="Breeding - Results" />
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <IonImg src={breedingResult.image}></IonImg>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div>
            <BreedingResultTable
              breedingResults={breedingResult.breedingResult}
            />
          </div>
          <div>
            <BreedingResultScore
              BreedingResultScore={breedingResult.breedingResultScore}
            />
          </div>
          <div>
            <p>Gene Quality {breedingResult.geneQuality}</p>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonButton>Breed again</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default breedingResult;
