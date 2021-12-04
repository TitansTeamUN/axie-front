import React from "react";
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
} from "@ionic/react";

const Header = ({ title }) => (
  <IonHeader>
    <IonToolbar mode="ios">
      <IonTitle>{title}</IonTitle>
      <IonButtons slot="start">
        <IonBackButton defaultHref="home"></IonBackButton>
      </IonButtons>
      <IonButtons slot="end">
        <IonIcon name="menu" slot="end"></IonIcon>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Header;
