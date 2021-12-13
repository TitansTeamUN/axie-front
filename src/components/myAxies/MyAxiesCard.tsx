import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonModal,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import AxieDescription from "../axieDescription/AxieDescription";
import "./MyAxiesCard.css";

const MyAxiesCard = ({ _id, image, score, value, breedCount }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="border-4 border-indigo-500/50 rounded-md m-6 pt-2"
      onClick={handleOpen}
      id={_id}
    >
      <div className="grid grid-rows-3 justify-items-center items-center">
        <AxieDescription
          showModal={showModal}
          setShowModal={handleClose}
          id={_id}
        />
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
        <div className="grid grid-rows-3 justify-items-center">
          <div>
            <p>Score: {score}</p>
          </div>
          <div>
            <p>Price: {value}</p>
          </div>
          <div>
            <p>Breed count: {breedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAxiesCard;
