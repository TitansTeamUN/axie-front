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
        <ButtonMenuContainer name="My Axies" link="/tab1"></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Axies search"
          link="/tab2"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Card explorer"
          link="/tab2"
        ></ButtonMenuContainer>

        <ButtonMenuContainer name="Breeding" link="/tab2"></ButtonMenuContainer>

        <ButtonMenuContainer name="Scholarship calculator" link="/scholar-calc"></ButtonMenuContainer>

        <ButtonMenuContainer name="News" link="/news"></ButtonMenuContainer>
      </div>
    </IonPage>
  );
};

export default Menu;
