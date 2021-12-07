import { IonCol, IonGrid, IonRow } from "@ionic/react";

const BreedingResultScore = ({ BreedingResultScore }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonRow>
            <p>Meta Score: {BreedingResultScore.Score}</p>
          </IonRow>
          <IonRow>
            <p>Status</p>
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
