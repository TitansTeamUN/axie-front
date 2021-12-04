import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/Basic/ExploreContainer';
import Header from '../header/Header';

const Tab1 = () => {
  return (
      <>
    <IonPage>
        <Header title="Breeding - Results"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab1;
