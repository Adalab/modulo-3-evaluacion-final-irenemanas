import "../style/App.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (changedInput) => {
    if (changedInput.key === "name") {
      setName(changedInput.value);
    } else if (changedInput.key === "gender") {
      setGender(changedInput.value);
    }
  };
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toLocaleUpperCase());
    })
    .filter((character) => {
      return gender === "all" ? true : character.gender === gender;
    });

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail character={selectedCharacter} />;
  };
  return (
    <>
      <header>
        <img
          className='logo'
          src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
          alt='Rick and Morty Logo'
        />
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path='/character/:id' render={renderDetail} />
        </Switch>
      </main>
    </>
  );
};

export default App;
