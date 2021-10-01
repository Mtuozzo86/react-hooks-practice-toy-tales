import React, { useState } from "react";

function ToyForm({ liftFormData }) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: toyName,
      image: toyImage,
      likes: 0,
    };
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => liftFormData(data));

    setToyImage("");
    setToyName("");
  }

  function handleChangeToyName(e) {
    setToyName(e.target.value);
  }
  function handleChangeImage(e) {
    setToyImage(e.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          value={toyName}
          onChange={handleChangeToyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={toyImage}
          onChange={handleChangeImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
