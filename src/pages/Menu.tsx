import { IonContent, IonPage } from "@ionic/react";

import { ButtonMenuContainer } from "../components/Basic";

const Menu = () => {
  
  return (
    <IonContent color="primary">
      <div id="logo" className="w-full h-2/6" color="primary">
        <img
          src="./assets/img/logo.jpg"
          alt="Logo"
          className="w-full mx-auto my-auto"
        />
      </div>
      <div className="align-middle space-y-12 h-4/6 py-6">
        <ButtonMenuContainer name="My Axies" link="/myAxies"></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Axies search"
          link="/axiesSearch"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Card explorer"
          link="/menu"
        ></ButtonMenuContainer>

        <ButtonMenuContainer name="Breeding" link="/breeding"></ButtonMenuContainer>

        <ButtonMenuContainer name="News" link="/news"></ButtonMenuContainer>
      </div>
    </IonContent>
  );
};

export default Menu;
