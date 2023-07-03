import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {

  const pokemonToDisplay = pokemon
  .filter(pokeman => pokeman.name.toLowerCase().includes(search.toLowerCase()))
  .map(pokeman => (
    <PokemonCard key={pokeman.id} pokeman={pokeman} />
  ));

  return (
    <>
      <h1>Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonToDisplay}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
