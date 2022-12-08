import React from "react";
import { CardPokemon } from "./CardPokemon";

const ListPokemon = ({ results, numCaracter }) => {
  console.log(results?.results);

  console.log("entra ", numCaracter);

  return (
    <div className="container">
      <ul className="cards">
        {results?.results.map((p, index) => (
          <>
            {index < numCaracter && (
              <li className="card-items" key={p.name}>
                <CardPokemon url={p.url} />
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default ListPokemon;
