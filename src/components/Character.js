import { Link } from "react-router-dom";

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
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <h4>{props.character.name}</h4>
        <p>
          {props.character.species} / {getGender()}
        </p>
      </Link>
    </>
  );
};
export default Character;
