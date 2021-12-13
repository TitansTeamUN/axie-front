import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonButton,
  IonInput,
  IonLabel,
} from "@ionic/react";
import { ellipsisVerticalOutline } from "ionicons/icons";

import { NavBarMenu } from "../components/Basic";
import Header from "../components/Basic/Header";
import { getAxieImgFromId } from "../utils";

const Breeding = () => {
  const demoMenuOptions = [
    {
      label: "Option 1",
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 1");
      },
      rippleEffect: true,
    },
    {
      label: "Option 2",
      icon: "",
      slot: "",
      onItemClick: () => {
        console.log("clicked 2");
      },
      rippleEffect: true,
    },
  ];

  return (
    <IonPage>
      <Header menu="menu" title="Breeding" />
      <IonContent fullscreen color="primary">
        <div className="flex flex-col px-6 mt-6">
          <div className="flex">
            <img
              src={getAxieImgFromId(9884834)}
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
              ></IonInput>
            </div>
          </div>

          <div className="flex justify-end ">
            <img
              src={getAxieImgFromId(9884834)}
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
              ></IonInput>
            </div>
          </div>
          <IonButton
            color="tertiary"
            className="justify-end"
            href="/breedingResults"
          >
            Breed
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Breeding;
