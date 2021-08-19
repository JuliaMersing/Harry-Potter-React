import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/Characters/Character.scss";

const Character = (props) => {
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

  const renderPatronus = () => {
    if (props.character.patronus === "") {
      return <span>Loading spell... ⏳</span>;
    } else if (props.character.birth !== "") {
      return <span>{props.character.patronus}</span>;
    }
  };

  const renderBirth = () => {
    if (props.character.birth === "") {
      return <span>Missing information, same as Voldemort's nose 👃🏻</span>;
    } else if (props.character.birth !== "") {
      return <span>{props.character.birth}</span>;
    }
  };

  return (
    <div className="SingleCharacter">
      <article className="singleCharacterCard">
        <img
          className="imageCharacter"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="characterDetails">
          <h4 className="characterDetailsName">
            {" "}
            ⚡️{props.character.name}⚡️
          </h4>
          <ul>
            <li>House: {props.character.house}</li>
            <li>Ancestry: {renderAncestry()}</li>
            <li>Patronus: {renderPatronus()}</li>
            <li>Birth: {renderBirth()}</li>
          </ul>
        </div>
      </article>
      <Link to="/">
        <span className="home_icon">👈🏻</span>
      </Link>
    </div>
  );
};

export default Character;
