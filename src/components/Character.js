import { Link } from "react-router-dom";
import "../style/App.scss";

const Character = (props) => {
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

  return (
    <>
      <Link to={`/character/${props.character.id}`} className='card__list--link'>
        <img
          className='card__list--element-image'
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <h4 className='card__list--element-name'>{props.character.name}</h4>
        <ul className='card__list--element-description'>
          <li>Especie: {getSpecies()}</li>
          <li>Género: {getGender()}</li>
        </ul>
      </Link>
    </>
  );
};
export default Character;
