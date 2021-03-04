import Character from "./Character";
import "../style/App.scss";

const CharacterList = (props) => {
  const cElements = props.characters.map((character) => {
    return (
      <li className='card__list--element' key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className='card__list'></ul>
      {cElements}
    </section>
  );
};
export default CharacterList;
