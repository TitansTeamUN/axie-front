import { Link } from 'react-router-dom';
import { IonButton} from "@ionic/react";
import '../../index.css'; //Tailwind Styles
const BotonMenuContainer = (props: { nombre: string, enlace: string }) => {
  
  return (
    <div className="container">
      <IonButton type='button'  className="text-gray"><Link to={{
    pathname: props.enlace
  }} className="text-gray"><strong className="text-gray">{props.nombre}</strong></Link></IonButton>
    </div>
  );
};

export default BotonMenuContainer;
