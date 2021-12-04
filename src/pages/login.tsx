import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/react";

import { logo } from "../components/Basic/index";

const login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Axie tools</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={logo} alt="Logo" />
      </IonContent>
      <form>
        <IonInput type="text" name="username" placeholder="Username"></IonInput>
        <IonInput
          type="password"
          name="password"
          placeholder="Password"
        ></IonInput>

        <IonButton type="submit">Login</IonButton>
      </form>
    </IonPage>
  );
};

export default login;
