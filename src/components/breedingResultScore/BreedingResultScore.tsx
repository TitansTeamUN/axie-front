import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./BreedingResultScore.css";

const BreedingResultScore = ({ BreedingResultScore }) => {
  return (
    <IonGrid className="border-4 border-indigo-500/50 rounded-md m-1 p-2">
      <IonRow>
        <IonCol>
          <IonRow>
            <p>Meta Score: {BreedingResultScore.Score}</p>
          </IonRow>
          <IonRow>
            <p>Stats</p>
          </IonRow>
          <IonRow>
            {BreedingResultScore.ScoreArray.map((el) => {
              return (
                <IonCol>
                  <p>{el}</p>
                </IonCol>
              );
            })}
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default BreedingResultScore;
