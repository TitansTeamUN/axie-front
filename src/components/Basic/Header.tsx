import {
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ellipsisVerticalOutline } from "ionicons/icons";
import NavBarMenu from "../Basic/NavBarMenu";

const Header = ({ menu, title }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonMenuButton slot="end" menu={menu}>
            <IonIcon icon={ellipsisVerticalOutline}></IonIcon>
          </IonMenuButton>
          <IonTitle className="ion-text-center text-2xl font-cursive" size="large">
            {title}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <NavBarMenu
        contentId="menuContent"
        ionMenuProps={{ side: "end", swipeGesture: false, menuId: menu }}
      />
    </>
  );
};

export default Header;
