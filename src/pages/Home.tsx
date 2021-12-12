import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonInput,
} from "@ionic/react";



const login = () => {
  return (
    <IonPage>
      <IonHeader className="h-1/4 align-middle py-2 text-center">
        <IonTitle className="text-3xl my-auto py-auto h-full">
          Axie tools
        </IonTitle>
      </IonHeader>
      <IonContent className="place-items-center">
        <img
          src="./assets/img/logo.jpg"
          className="w-3/4 content-center mx-auto"
          alt="Logo"
        />
      </IonContent>

      <IonContent className="align-middle">
        <form action="/Menu" className="space-y-6">
          <IonInput
            type="text"
            name="username"
            placeholder="Username"
            className="text-xl font-medium text-white text-center placeholder-current"
          ></IonInput>
          <IonInput
            type="password"
            name="password"
            placeholder="Password"
            className="text-xl font-medium text-center"
          ></IonInput>
          <div className="text-center">
            <button
              type="submit"
              className="text-center bg-purple-800 p-4 w-1/3 rounded-lg font-bold"
            >
              Login
            </button>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default login;
