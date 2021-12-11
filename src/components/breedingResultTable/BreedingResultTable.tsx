import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./BreedingResultTable.css";

const BreedingResultTable = ({ breedingResults }) => {
  return (
    <>
      <IonGrid className="container__BeedingResultTable">
        <IonRow>
          <IonCol>
            <IonRow>
              <IonCol size="4">
                <p>Dominante</p>
              </IonCol>
              <IonCol size="4">
                <p>Recesivo 1</p>
              </IonCol>
              <IonCol size="4">
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
