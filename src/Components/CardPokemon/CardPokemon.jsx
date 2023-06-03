import React from "react";

const CardPokemon = ({image, title, description, description2}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h2>{title}</h2>
        <p className="card-text">
            Base Experience: {description}
        </p>
        <p className="card-text">
            Height: {description2}
        </p>
      </div>
    </div>
  );
};

export default CardPokemon;
