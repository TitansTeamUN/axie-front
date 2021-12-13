import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonModal,
  IonRow,
} from "@ionic/react";
import "./AxieCardDescription.css";

const AxieCardDescription = ({ _id, image }) => {
  return (
    <div className="border-4 border-indigo-500/50 rounded-md m-6 pt-2" id={_id}>
      <div className="grid grid-rows-2 justify-items-center items-center">
        <div>
          <p>{_id}</p>
        </div>
        <IonGrid style={{ display: "flex", justifyContent: "center" }}>
          <IonRow style={{ justifyContent: "center" }}>
            <IonCol sizeMd="4" sizeXs="12">
              <IonImg src={image}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default AxieCardDescription;
