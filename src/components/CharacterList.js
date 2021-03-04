import Character from "./Character";

const CharacterList = (props) => {
  const cElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className='cards'></ul>
      {cElements}
    </section>
  );
};
export default CharacterList;
