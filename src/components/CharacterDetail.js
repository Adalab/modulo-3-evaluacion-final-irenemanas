import { Link } from "react-router-dom";
import "../style/App.scss";

const CharacterDetail = (props) => {
  const getGender = () => {
    if (props.character.gender === "Female") {
      return "Femenino";
    } else if (props.character.gender === "Male") {
      return "Masculino";
    } else {
      return "Sin género";
    }
  };
  if (props.character === undefined) {
    // No hay datos
    return <p>No hay datos</p>;
  } else {
    return (
      <section className='card-detail'>
        <Link to='/' className='link'>
          <span className='link__text'>Volver</span>
        </Link>

        <img
          className='card-detail__image'
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <ul className='card-detail__description'>
          <li className='card-detail__description--name'>Nombre: {props.character.name}</li>
          <li className='card-detail__description--gender'>Género: {getGender()}</li>
          <li className='card-detail__description--species'>Especie: {props.character.species}</li>
          <li className='card-detail__description--origin'>Planeta de origen: {props.character.origin}</li>
          <li className='card-detail__description--planet'>Planeta de residencia: {props.character.location}</li>
          <li className='card-detail__description--status'>Estatus: {props.character.status}</li>
        </ul>
      </section>
    );
  }
};
export default CharacterDetail;
