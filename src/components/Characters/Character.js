import React from "react";
import "../../stylesheet/Characters/Character.scss";

const Character = (props) => {
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
        <p className="character__text-info">{props.character.house}</p>
        <p className="character__text-info">{props.character.ancestry}</p>
      </div>
    </div>
  );
};

export default Character;
