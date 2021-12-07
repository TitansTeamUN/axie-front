import { IonCol, IonGrid, IonRow } from "@ionic/react";

const BreedingResultTable = ({ breedingResults }) => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonRow>
              <IonCol>
                <p>Dominante</p>
              </IonCol>
              <IonCol>
                <p>Recesivo 1</p>
              </IonCol>
              <IonCol>
                <p>Recesivo 2</p>
              </IonCol>
            </IonRow>
            {breedingResults.map((el) => {
              return (
                <IonRow>
                  <IonCol>
                    <p>{el[0]}</p>
                  </IonCol>
                  <IonCol>
                    <p>{el[1]}</p>
                  </IonCol>
                  <IonCol>
                    <p>{el[2]}</p>
                  </IonCol>
                </IonRow>
              );
            })}
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default BreedingResultTable;
