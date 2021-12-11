import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";
import Header from "../header/Header";
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
        <IonImg src={image}></IonImg>
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
