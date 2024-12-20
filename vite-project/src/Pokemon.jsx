import React from 'react';

function Pokemon(props) {
  let details = props.details;

  return (
    <div>
      <h3> {details.name.toUpperCase()} </h3>
      <img src={details.sprites.front_default}
        alt={details.name}/>
      <p>Weight: {details.weight} lbs</p>
      <p>Height: {details.height} feet</p>
    </div>
  )
}

export default Pokemon;
