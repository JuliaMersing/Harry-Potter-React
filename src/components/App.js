import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./Characters/CharactersList";
import Logo from "../images/logo.png";
import "../stylesheet/App.scss";
import Filters from "../components/Filters/Filters";
import FilterAncestry from "./Filters/FilterAncestry";
import ls from "../services/LocalStorage";
import NotFound from "../components/NotFound/NotFound";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(ls.get("filterHouse", ""));
  const [filterAncestry, setFilterAncestry] = useState(
    ls.get("filterAncestry", "")
  );

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterHouse", filterHouse);
    ls.set("filterAncestry", filterAncestry);
  }, [characters, filterName, filterHouse, filterAncestry]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "ancestry") {
      setFilterAncestry(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterHouse === "All") {
        return true;
      } else {
        return character.house
          .toLowerCase()
          .includes(filterHouse.toLowerCase());
      }
    })

    .filter((character) => {
      if (filterAncestry === "All") {
        return true;
      } else {
        return (
          character.ancestry.toLowerCase() === filterAncestry.toLowerCase()
        );
      }
    });

  const handleReset = () => {
    setCharacters(characters);
    setFilterName("");
    setFilterHouse("All");
    setFilterAncestry("All");
  };

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <Filters
        filterName={filterName}
        filterSpecies={filterHouse}
        filterGender={FilterAncestry}
        handleFilter={handleFilter}
        handleReset={handleReset}
      />
      <ul>
        {filteredCharacters.length > 0 ? (
          <CharactersList characters={filteredCharacters} />
        ) : (
          <NotFound />
        )}
      </ul>
    </div>
  );
};

export default App;
