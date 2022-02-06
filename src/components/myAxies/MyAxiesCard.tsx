import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import { useState } from "react";
import AxieDescription from "../axieDescription/AxieDescription";

const MyAxiesCard = ({ _id, image, name, value, breedCount, axieClass }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="border-2 border-indigo-500/50 rounded-md bg-darkPurpleDarkest m-4 py-2 "
      onClick={handleOpen}
      id={_id}
    >
      <div className="flex flex-col justify-items-center items-center">
        <AxieDescription
          showModal={showModal}
          setShowModal={handleClose}
          id={_id}
        />
        <div
          className={`border border-black rounded-md px-2 py-1 bg-cl${axieClass}`}
        >
          <p>{`# ${_id}`}</p>
        </div>
        <IonGrid className="flex justify-center">
          <IonRow>
            <IonCol sizeMd="4" sizeXs="12">
              <IonImg src={image}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="flex flex-col justify-items-center items-center">
          <div>
            <p className="text-sm">{name}</p>
          </div>
          {value && (
            <div>
              <p className="text-sm">Price: {`$${value}`}</p>
            </div>
          )}
          <div>
            <p className="text-sm">Breed count: {breedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAxiesCard;
