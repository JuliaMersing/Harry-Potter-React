import React from "react";
import "../../stylesheet/Characters/CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const renderHouse = () => {
    if (props.character.house === "Gryffindor") {
      return <span>🦁 Gryffindor </span>;
    } else if (props.character.house === "Slytherin") {
      return <span>🐍 Slytherin </span>;
    } else if (props.character.house === "Hufflepuff") {
      return <span>🦝 Hufflepuff</span>;
    } else if (props.character.house === "Ravenclaw") {
      return <span>🦅 Ravenclaw</span>;
    } else if (props.character.house === "") {
      return <span>🎒 Nomad</span>;
    }
  };

  const renderAncestry = () => {
    if (props.character.ancestry === "half-blood") {
      return <span>🩸 Half-blood </span>;
    } else if (props.character.ancestry === "pure-blood") {
      return <span>🧙‍♂️ Pure-blood </span>;
    } else if (props.character.ancestry === "squib") {
      return <span>🤡 Squib</span>;
    } else if (props.character.ancestry === "muggleborn") {
      return <span> 🦹‍♀️ Muggleborn</span>;
    } else if (props.character.ancestry === "") {
      return <span> 🤷🏼‍♀️ Nobody knows</span>;
    }
  };

  return (
    <Link className="link character" to={`/character/${props.character.id}`}>
      <div className="character">
        <div className="character__name">
          <h4>{props.character.name}</h4>
        </div>
        <img
          className="character__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="character__info">
          <p className="character__text-info">{renderHouse()}</p>
          <p className="character__text-info">{renderAncestry()}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
