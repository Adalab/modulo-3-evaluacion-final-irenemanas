import "../style/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  return (
    <>
      <header>
        <img className='card__img' src='../images/Rick_MortyLogo.png' alt='foto de mujer' />
      </header>
      <main>
        <Filters />
        <CharacterList />
      </main>
    </>
  );
};

export default App;
