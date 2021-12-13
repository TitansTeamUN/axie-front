import {
  IonMenu,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
  IonRouterOutlet,
  IonRippleEffect,
} from "@ionic/react";

const optionsDemo = [
  {
    label: "My Axies",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/myAxies",
  },
  {
    label: "Axies search",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/axiesSearch",
  },
  {
    label: "Card explorer",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/cardExplorer",
  },
  {
    label: "Breeding",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/breeding",
  },
  {
    label: "News",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/news",
  },
];

const NavBarMenu = ({ contentId, ionMenuProps }) => {
  return (
    <IonMenu contentId={contentId} {...ionMenuProps}>
      <IonList>
        {optionsDemo.map((option, index) => {
          return (
            <IonItem
              className="ion-activatable"
              onClick={option.onItemClick}
              key={index}
              href={option.href}
            >
              {option.rippleEffect && <IonRippleEffect />}
              <IonIcon icon={option.icon} slot={option.slot} />
              <IonLabel className="px-4">{option.label}</IonLabel>
            </IonItem>
          );
        })}
      </IonList>
      <IonRouterOutlet id={contentId}></IonRouterOutlet>
    </IonMenu>
  );
};

export default NavBarMenu;
