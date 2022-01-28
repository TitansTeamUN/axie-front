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
    label: "mylabel",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
  },
  {
    label: "Scholarship calculator",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
    href: "/scholar-calc",
  },
  {
    label: "News",
    icon: "", //use a const  from ionicons or a custom path
    slot: "",
    onItemClick: () => {}, //a function to handle click on option
    rippleEffect: true,
  },
];

const NavBarMenu = ({ contentId, ionMenuProps, options }) => {
  return (
    <IonMenu contentId={contentId} {...ionMenuProps}>
      <IonList>
        {options.map((option, index) => {
          return (
            <IonItem
              className="ion-activatable"
              onClick={option.onItemClick}
              key={index}
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
