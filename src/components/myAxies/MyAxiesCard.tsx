import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";

import "./MyAxiesCard.css";

const MyAxiesCard = ({ _id, image, score, value, myAxie }) => {
  return (
    <IonGrid className="container__axieCard">
      <IonRow>
        <IonCol>
          <p>{_id}</p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="2">
          <IonImg src={image}></IonImg>
        </IonCol>
      </IonRow>
      {myAxie ? (
        <IonRow>
          <IonCol>
            <p>{score}</p>
          </IonCol>
          <IonCol>
            <p>{value}</p>
          </IonCol>
        </IonRow>
      ) : (
        <>
          <IonButton>Comprar</IonButton>
        </>
      )}
    </IonGrid>
  );
};

export default MyAxiesCard;
