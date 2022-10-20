import React, { useState } from "react";

function ToyCard({name, image, likes, id, toys, setToys}) {
  const [stateLikes, setLikesState] = useState(likes)


  const handleDelete = () => {
      const newToyList = toys.filter((toy) => (toy.id!== id))
      console.log(newToyList)
      fetch(`http://localhost:3001/toys/${id}`, {method: "DELETE"})
      setToys(newToyList)
  }

  const handleLikes = () => {
    setLikesState(() => (stateLikes+ 1))
    
    let configurationObject = {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({likes: (stateLikes + 1)})
    }

    fetch(`http://localhost:3001/toys/${id}`, configurationObject)

  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{stateLikes} Likes </p>
      <button onClick={handleLikes}className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
