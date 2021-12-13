import { Link } from "react-router-dom";
import { IonButton } from "@ionic/react";

const ButtonMenuContainer = ({ name, link }) => {
  return (
    <IonButton color="tertiary"
      type="button"
      className="justify-end block mx-auto w-1/2"
    >
      <Link
        to={{
          pathname: link,
        }}
        className="text-black"
      >
        {name}
      </Link>
    </IonButton>
  );
};

export default ButtonMenuContainer;
