import { IonPage } from "@ionic/react";

import { ButtonMenuContainer } from "../components/Basic";

const Menu = () => {
  return (
    <IonPage>
      <div className="w-full h-2/6">
        <img
          src="./assets/img/logo.jpg"
          alt="Logo"
          className="w-full mx-auto"
        />
      </div>
      <div className="align-middle space-y-6 h-4/6 py-14">
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
      </div>
    </IonPage>
  );
};

export default Menu;
