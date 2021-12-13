import { IonContent, IonPage } from "@ionic/react";

import { ButtonMenuContainer } from "../components/Basic";

const Menu = () => {
  return (
    <IonPage>
      <IonContent className="w-full h-1/6" color="primary">
        <img
          src="./assets/img/logo.jpg"
          alt="Logo"
          className="w-full mx-auto my-auto"
        />
      </IonContent>
      <IonContent className="align-middle space-y-6 h-5/6 py-14" color="primary">
        <ButtonMenuContainer name="My Axies" link="/tab2"></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Axies search"
          link="/tab3"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Card explorer"
          link="/menu"
        ></ButtonMenuContainer>

        <ButtonMenuContainer name="Breeding" link="/breeding"></ButtonMenuContainer>

        <ButtonMenuContainer name="News" link="/menu"></ButtonMenuContainer>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
