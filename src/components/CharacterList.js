import Character from "./Character";

const CharacterList = (props) => {
  return (
    <section>
      <ul className='cards'>
        <li>
          <Character></Character>
        </li>
      </ul>
    </section>
  );
};
export default CharacterList;
