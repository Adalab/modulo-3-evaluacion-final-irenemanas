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
  const getSpecies = () => {
    if (props.character.species === "Human") {
      return "Humana";
    } else {
      return "Alien";
    }
  };
  const getStatus = () => {
    if (props.character.status === "Alive") {
      return "Vivo";
    } else {
      return "Muerto";
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
          <li className='card-detail__description--name'>{props.character.name}</li>
          <li>Género: {getGender()}</li>
          <li>Especie: {getSpecies()}</li>
          <li>Planeta de origen: {props.character.origin}</li>
          <li>Planeta de residencia: {props.character.location}</li>
          <li>Estatus: {getStatus()}</li>
        </ul>
      </section>
    );
  }
};
export default CharacterDetail;
