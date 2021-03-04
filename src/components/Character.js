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
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <img
          className='card__list--element-image'
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <h4 className='card__list--element-name'>{props.character.name}</h4>
        <p className='card__list--element-description'>
          {props.character.species} / {getGender()}
        </p>
      </Link>
    </>
  );
};
export default Character;
