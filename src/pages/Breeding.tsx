import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonLabel,
} from "@ionic/react";

import { Header } from "../components/Basic";
import { getAxieImgFromId } from "../utils";
import { useState } from "react";

const Breeding = () => {
  const [axieIdOne, setAxieIdOne] = useState("");
  const [axieIdTwo, setAxieIdTwo] = useState("");

  return (
    <IonPage>
      <Header menu="menu" title="Breeding Simulator" />
      <IonContent fullscreen color="primary">
        <div className="flex flex-col px-6 mt-6">
          <div className="flex">
            <img
              src={
                axieIdOne === ""
                  ? getAxieImgFromId(1000)
                  : getAxieImgFromId(axieIdOne)
              }
              className="w-28 h-18 object-contain mirror-img"
            />
          </div>
          <div className="mb-6">
            <IonLabel position="fixed" className="text-white">
              Axie id
            </IonLabel>
            <div className="bg-white rounded-md">
              <IonInput
                size={4}
                className="text-black "
                placeholder="12345678"
                value={axieIdOne}
                onIonChange={(e) => {
                  setAxieIdOne(e.detail.value!);
                }}
                debounce={1000}
              ></IonInput>
            </div>
          </div>

          <div className="flex justify-end ">
            <img
              src={
                axieIdTwo === ""
                  ? getAxieImgFromId(2000)
                  : getAxieImgFromId(axieIdTwo)
              }
              className="w-28 h-18 object-contain"
            />
          </div>
          <div className="mb-6 ">
            <IonLabel position="fixed" className="text-white">
              Axie id
            </IonLabel>
            <div className="bg-white rounded-md">
              <IonInput
                className="text-black "
                placeholder="12345678"
                value={axieIdTwo}
                onIonChange={(e) => {
                  setAxieIdTwo(e.detail.value!);
                }}
                debounce={1000}
              ></IonInput>
            </div>
          </div>
          <IonButton
            color="tertiary"
            className="justify-end"
            href={`/breedingResults/${axieIdOne}/${axieIdTwo}`}
            disabled={
              axieIdOne === "0" ||
              axieIdOne === "" ||
              !/([0-9]){1,10}$/.test(axieIdOne) ||
              axieIdTwo === "0" ||
              axieIdTwo === "" ||
              !/([0-9]){1,10}$/.test(axieIdTwo)
            }
          >
            Breed
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Breeding;
