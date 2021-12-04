import { Link } from 'react-router-dom';
import { IonButton} from "@ionic/react";
import '../../index.css'; //Tailwind Styles
const BotonMenuContainer = (props: { nombre: string, enlace: string }) => {
  
  return (
    <div className="container">
      <IonButton type='button' ><Link to={{
    pathname: props.enlace
  }}><strong>{props.nombre}</strong></Link></IonButton>
    </div>
  );
};

export default BotonMenuContainer;
