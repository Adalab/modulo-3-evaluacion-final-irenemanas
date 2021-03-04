import { Link } from "react-router-dom";

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
        <Link to='/'>
          <span>Volver</span>
        </Link>

        <img
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <ul>
          <li>Nombre: {props.character.name}</li>
          <li>Género: {getGender()}</li>
          <li>Especie: {props.character.species}</li>
          <li>Planeta de origen: {props.character.origin}</li>
          <li>Planeta de residencia: {props.character.location}</li>
          <li>Estatus: {props.character.status}</li>
        </ul>
      </section>
    );
  }
};
export default CharacterDetail;
