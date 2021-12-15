import { IonContent, IonPage } from "@ionic/react";

import { ButtonMenuContainer } from "../components/Basic";

const Menu = () => {
  return (
    <IonContent color="primary">
      <div id="logo" className="flex justify-center w-full font-cursive text" color="primary">Menu</div>

      <div className=" flex flex-col items-center space-y-12 h-4/6 py-6">
        <ButtonMenuContainer
          name="My Axies"
          link="/myAxies"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Axies search"
          link="/axiesSearch"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Card explorer"
          link="/menu"
        ></ButtonMenuContainer>

        <ButtonMenuContainer
          name="Breeding"
          link="/breeding"
        ></ButtonMenuContainer>

        <ButtonMenuContainer name="News" link="/news"></ButtonMenuContainer>
      </div>
    </IonContent>
  );
};

export default Menu;
