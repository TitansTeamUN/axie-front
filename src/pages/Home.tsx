import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { logoGoogle, logoFacebook } from "ionicons/icons";

const login = () => {
  return (
    <IonPage>
      <IonContent color="primary" fullscreen>
        <div className="flex flex-col items-center">
          <img
            src="./assets/img/axie-infinity-logo.svg"
            className="w-3/4 h-48"
            alt="Logo"
          />
          <h1 className="font-cursive text-4xl absolute mt-36 text-greenSheen">
            Tools
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img src="./assets/img/axie-home-logo.png" className="w-32 mt-4 mb-10" />
        </div>

        <form action="/Menu" className="flex justify-center w-full px-8">
          <div className="w-full space-y-4">
            <div className="bg-white rounded-md w-full">
              <IonInput
                type="text"
                name="username"
                placeholder="Username"
                className="text-black text-center"
              ></IonInput>
            </div>

            <div className="bg-white rounded-md w-full">
              <IonInput
                type="password"
                name="password"
                placeholder="Password"
                className="text-black text-center"
              ></IonInput>
            </div>
            <div className="text-center w-full">
              <IonButton
                color="tertiary"
                type="submit"
                className="w-full text-lg mt-2"
              >
                Login
              </IonButton>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg">or login with:</div>
              <div className="flex">
                <div>
                  <IonIcon
                    className="text-6xl m-4"
                    icon={logoFacebook}
                  ></IonIcon>
                </div>
                <div>
                  <IonIcon className="text-6xl m-4" icon={logoGoogle}></IonIcon>
                </div>
              </div>
              <div className="text-xs font-thin font-sans text-justify">
                All product and company names are trademarks™ or registered®
                trademarks of their respective holders.
              </div>
            </div>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default login;
