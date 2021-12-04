import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";

import {logo, BotonMenuContainer} from '../components/Basic/index'
  
  const Menu = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
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
  
  export default Menu;
  