import React from "react";
import "../../stylesheet/Characters/Character.scss";

const Character = (props) => {
  return (
    <div className="character__card">
      <div className="character__card--name">
        <h4>{props.character.name}</h4>
      </div>
      <img
        className="character__card--img"
        src={props.character.photo}
        alt={props.character.name}
      />
      <div className="character__card--info">
        <p className="character__card--text-info">{props.character.house}</p>
        <p className="character__card--text-info">{props.character.ancestry}</p>
      </div>
    </div>
  );
};

export default Character;
