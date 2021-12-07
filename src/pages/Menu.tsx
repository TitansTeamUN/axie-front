import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import BotonMenuContainer from "../components/Basic/BotonMenuContainer";
  import logo from '../resources/Logo-Axie.jpg';
  
  const Tab3 = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Menú</IonTitle>
            </IonToolbar>
          </IonHeader>
          <img src={logo} alt="Logo" />
          <BotonMenuContainer nombre="My Axies" enlace="/tab1" ></BotonMenuContainer>
          <BotonMenuContainer nombre="Axies search" enlace="/tab2" ></BotonMenuContainer>
          <BotonMenuContainer nombre="Card explorer" enlace="/tab2" ></BotonMenuContainer>
          <BotonMenuContainer nombre="Breeding" enlace="/tab2" ></BotonMenuContainer>
          <BotonMenuContainer nombre="News" enlace="/tab2" ></BotonMenuContainer>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab3;
  