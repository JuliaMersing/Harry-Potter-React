import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./Characters/CharactersList";
import Logo from "../images/logo.png";
import "../stylesheet/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <CharactersList characters={characters} />
    </div>
  );
};

export default App;
