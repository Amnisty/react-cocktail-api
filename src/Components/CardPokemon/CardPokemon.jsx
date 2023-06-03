import React from "react";

const CardPokemon = ({image, title}) => {
  return (
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
            {title}
        </p>
      </div>
    </div>
  );
};

export default CardPokemon;
