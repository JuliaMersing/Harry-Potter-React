import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./Characters/CharactersList";
import Logo from "../images/logo.png";
import "../stylesheet/App.scss";
import Filters from "../components/Filters/Filters";
import FilterAncestry from "./Filters/FilterAncestry";
import ls from "../services/LocalStorage";
import NotFound from "../components/NotFound/NotFound";
import PageNotFound from "../components/NotFound/PageNotFound";
import Character from "../components/Characters/Character";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(ls.get("filterHouse", "All"));
  const [filterAncestry, setFilterAncestry] = useState(
    ls.get("filterAncestry", "All")
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

  const renderCharacter = (props) => {
    const routeCharacterId = props.match.params.characterId;

    const foundCharacter = characters.find((character) => {
      return character.id.toLowerCase() === routeCharacterId.toLowerCase();
    });
    if (foundCharacter !== undefined) {
      return <Character character={foundCharacter} />;
    }
  };

  const handleReset = () => {
    setCharacters(characters);
    setFilterName("");
    setFilterHouse("All");
    setFilterAncestry("All");
  };

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <Switch>
        <Route exact path="/">
          <div>
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
        </Route>
        <Route path="/character/:characterId" render={renderCharacter} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
