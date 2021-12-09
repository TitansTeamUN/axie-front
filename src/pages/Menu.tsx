import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { logo, BotonMenuContainer } from "../components/Basic/index";

const Menu = () => {
  return (
    <IonPage>
      <div className="w-full h-2/6">
        <img src={logo} alt="Logo" className="w-full mx-auto" />
      </div>
      <div className="align-middle space-y-6 h-4/6 py-14">
        <BotonMenuContainer
          nombre="My Axies"
          enlace="/tab1"
        ></BotonMenuContainer>

        <BotonMenuContainer
          nombre="Axies search"
          enlace="/tab2"
        ></BotonMenuContainer>

        <BotonMenuContainer
          nombre="Card explorer"
          enlace="/tab2"
        ></BotonMenuContainer>

        <BotonMenuContainer
          nombre="Breeding"
          enlace="/tab2"
        ></BotonMenuContainer>

        <BotonMenuContainer nombre="News" enlace="/tab2"></BotonMenuContainer>
      </div>
    </IonPage>
  );
};

export default Menu;
