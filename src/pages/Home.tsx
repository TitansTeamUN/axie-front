import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonInput,
  IonButton,
} from "@ionic/react";

const login = () => {
  return (
    <IonPage>
      <IonContent className="h-1/6 align-middle py-2 text-center"
        color="primary"
      >
        <IonTitle className="text-3xl my-auto py-auto h-full">
          Axie tools
        </IonTitle>
      </IonContent>
      <IonContent className="place-items-center h-1/6" color="primary">
        <img
          src="./assets/img/logo.jpg"
          className="w-3/4 content-center mx-auto"
          alt="Logo"
        />
      </IonContent>

      <IonContent className="align-middle  h-4/6" color="primary">
        <form action="/Menu">
          <div className="w-1/2 mx-auto space-y-4">
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
            <div className="text-center">
              <IonButton color="tertiary" type="submit" className="justify-end">
                Login
              </IonButton>
            </div>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default login;
