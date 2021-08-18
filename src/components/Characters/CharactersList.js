import React from "react";
import Character from "../Characters/CharacterCard";
import "../../stylesheet/Characters/CharactersList.scss";

const CharactersList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharactersList;
