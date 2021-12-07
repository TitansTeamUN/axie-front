import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonMenuToggle,
} from "@ionic/react";

import { menuController } from "@ionic/core";

const Header = ({ title }) => {
  const [showMenu, setShotMenu] = useState(false);

  return (
    <>
      <IonMenu slot="end" menuId="first">
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton menu="first" hidden={true}></IonMenuButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home"></IonBackButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
