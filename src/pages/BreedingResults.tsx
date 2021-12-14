import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";
import Header from "../components/Basic/Header";
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
          <BreedingResultTable
            breedingResults={breedingResult.breedingResult}
          />
          {/* <BreedingResultScore
          BreedingResultScore={breedingResult.breedingResultScore}
        /> */}
          <div className="border-2 border-indigo-500/50 rounded-md my-10">
            <div className="grid grid-cols-1 justify-items-center rounded-md py-6 bg-sonicSilver">
              <div>
                <p>Gene Quality {breedingResult.geneQuality} </p>
              </div>
            </div>
          </div>
          <IonButton href="/breeding" color="tertiary" className="justify-end">
            Breed again
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default breedingResult;
