import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  const toyCards = toys.map((toy) => 
  <ToyCard 
  key={toy.id}
  id={toy.id}
  name={toy.name}
  image={toy.image}
  likes={toy.likes}
  toys={toys}
  setToys={setToys}
  />
  )


  return (
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
