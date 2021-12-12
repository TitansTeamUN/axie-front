import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";

import BreedingResultScore from "../components/breedingResultScore/BreedingResultScore";
import BreedingResultTable from "../components/breedingResultTable/BreedingResultTable";


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
    <IonPage>

      <IonContent fullscreen>
        <IonGrid style={{ display: "flex", justifyContent: "center" }}>
          <IonRow style={{ justifyContent: "center" }}>
            <IonCol size="2">
              <IonImg src={breedingResult.image}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
        <BreedingResultTable breedingResults={breedingResult.breedingResult} />
        <BreedingResultScore
          BreedingResultScore={breedingResult.breedingResultScore}
        />
        <IonGrid style={{ display: "flex", justifyContent: "center" }}>
          <IonRow style={{ justifyContent: "center" }}>
            <IonCol>
              <p>Gene Quality {breedingResult.geneQuality}</p>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid style={{ display: "flex", justifyContent: "center" }}>
          <IonRow style={{ justifyContent: "center" }}>
            <IonCol>
              <IonButton>Breed again</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default breedingResult;
