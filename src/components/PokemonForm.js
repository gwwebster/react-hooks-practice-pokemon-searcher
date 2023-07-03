import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  });

  function handleChange(e) {
    if (e.target.name !== "frontUrl" && e.target.name !== "backUrl") {
      const key = e.target.name
      setNewPokemon({
        ...newPokemon,
        [key]: e.target.value
      });
    } else if (e.target.name === "frontUrl") {
      setNewPokemon({
        ...newPokemon,
        sprites: {
          ...newPokemon.sprites,
          front: e.target.value
        }
      });
    } else if (e.target.name === "backUrl") {
      setNewPokemon({
        ...newPokemon,
        sprites: {
          ...newPokemon.sprites,
          back: e.target.value
        }
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAddPokemon(newPokemon)
    setNewPokemon({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name"
            value={newPokemon.name}
            onChange={handleChange} 
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={newPokemon.hp} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
