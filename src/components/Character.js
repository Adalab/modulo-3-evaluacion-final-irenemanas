const Character = (props) => {
  return (
    <>
      <img src={props.character.image} alt={props.character.name} />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
    </>
  );
};
export default Character;
