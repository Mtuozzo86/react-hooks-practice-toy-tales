import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete }) {
  console.log(toys);

  const toyCollection = toys.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        id={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        onDelete={onDelete}
      />
    );
  });

  return <div id="toy-collection">{toyCollection}</div>;
}

export default ToyContainer;
