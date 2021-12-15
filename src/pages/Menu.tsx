import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";

import { ButtonMenuContainer } from "../components/Basic";

// we should implement this using navigation (IonNav)
const Menu = () => {
  return (
    <IonContent color="primary">
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle
            className="ion-text-center font-cursive text-2xl"
            size="large"
          >
            Menu
          </IonTitle>
        </IonToolbar>
      </IonHeader>

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
          link="/card-explorer"
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
