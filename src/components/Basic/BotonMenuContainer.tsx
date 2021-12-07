import { Link } from 'react-router-dom';
import '../../index.css'; //Tailwind Styles
const BotonMenuContainer = (props: { nombre: string, enlace: string }) => {
  
  return (
    <div className="container">
      <button type='button' ><Link to={{
    pathname: props.enlace
  }}><strong>{props.nombre}</strong></Link></button>
    </div>
  );
};

export default BotonMenuContainer;
