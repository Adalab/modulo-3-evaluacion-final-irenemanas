import "../style/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  return (
    <>
      <header>
        <img className='card__img' src='../images/Rick_MortyLogo.png' alt='Rick and Morty Logo' />
      </header>
      <main>
        <Filters />
        <CharacterList characters={characters} />
      </main>
    </>
  );
};

export default App;
