import React from "react";
import useFetch from "../hooks/useFetch";

export const CardPokemon = ({ url }) => {
  const current = useFetch(url);
  const { loading, data } = current;

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {data.id}
            </h5>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer" style={{ textAlign: "center" }}>
            <p className="card-text text-capitalize">
              <b>Name:</b> {data.name}
            </p>
            <p className="card-text text-capitalize">
              <b>Type: </b>
              {data.types[0].type.name}
            </p>
            <p className="card-text text-capitalize">
              <b>Weight: </b>
              {data.weight} kg
            </p>
            <p className="card-text text-capitalize">
              <b>Height:</b> {data.height}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
