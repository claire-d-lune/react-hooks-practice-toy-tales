import React, {useState} from "react";

function ToyForm({toys, setToys}) {
  //using this to create an index in state before the post


  const [newToy, setNewToy] = useState({
    name: "",
    image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
    likes: 0
  })

  const handleNameChange = (e) => {
    const newToyInfo = {...newToy}
    newToyInfo.name = (e.target.value)
    setNewToy(newToyInfo)
  }

  const handleImageChange = (e) => {
    const newToyInfo = {...newToy}
    newToyInfo.image = e.target.value
    setNewToy(newToyInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")

    const resetObj = {
      name: "",
      image: "",
      likes: 0
    }

    setNewToy(resetObj)

    //set in state above, post to server below:
    let configurationObject = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newToy)
    }


    // on Sam's advice, I moved the toy setter so that it uses the json response (including a new id)
    //, instead of the object I created. 
    fetch("http://localhost:3001/toys", configurationObject)
    .then(res => res.json())
    .then(data => {  
      console.log(data)
      setToys([...toys, data])
    })

  }

  console.log(newToy)
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
        />
        <br />
        <input
          onChange={handleImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
