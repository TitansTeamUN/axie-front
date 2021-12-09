import { Link } from 'react-router-dom';
import { IonButton} from "@ionic/react";
import '../../index.css'; //Tailwind Styles
const BotonMenuContainer = (props: { nombre: string, enlace: string }) => {
  
  return (
      <button type='button'  className="text-center bg-purple-800 p-4 w-1/3 rounded-lg font-bold block mx-auto"><Link to={{
    pathname: props.enlace
  }} className="text-white">{props.nombre}</Link></button>
  );
};

export default BotonMenuContainer;
