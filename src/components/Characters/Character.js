import React from "react";
import "../../stylesheet/Characters/Character.scss";

const Character = (props) => {
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
      return <span>No House</span>;
    }
  };

  const renderAncestry = () => {
    if (props.character.ancestry === "Half-blood") {
      return <span>🩸 Half-blood </span>;
    } else if (props.character.ancestry === "Pure-blood") {
      return <span>🧙‍♂️ Pure-blood </span>;
    } else if (props.character.ancestry === "Squib") {
      return <span>🤡 Squib</span>;
    } else if (props.character.ancestry === "Muggleborn") {
      return <span> 🦹‍♀️ Muggleborn</span>;
    } else if (props.character.ancestry === "") {
      return <span> ❔ No Defined</span>;
    }
  };

  return (
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
  );
};

export default Character;
