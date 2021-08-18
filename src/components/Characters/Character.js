import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/Characters/Character.scss";

const Character = (props) => {
  return (
    <div className="SingleCharacter">
      <article className="singleCharacterCard">
        <img
          className="imageCharacter"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="characterDetails">
          <h4>{props.character.name}</h4>
          <ul>
            <li>House: {props.character.house}</li>
            <li>Ancestry: {props.character.ancestry}</li>
            <li>Patronus: {props.character.patronus}</li>
            <li>Birth: {props.character.birth}</li>
          </ul>
        </div>
      </article>
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
};

export default Character;
