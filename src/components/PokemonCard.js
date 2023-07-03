import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokeman }) {

  const {hp, name, sprites } = pokeman;
  const [showBack, setShowBack] = useState(false);

  return (
    <Card>
      <div onClick={() => setShowBack(showBack => !showBack)}>
        <div className="image">
          {showBack ? 
            (<img src={sprites.back} alt={name} />) 
            : (<img src={sprites.front} alt={name} />)
          } 
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
