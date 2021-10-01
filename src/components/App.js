import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((data) => setToys(data));
  }, []);

  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function liftFormData(newToy) {
    const addedToy = [...toys, newToy];
    setToys(addedToy);
  }

  function handleDeleteToy(deleted) {
    const deletedToy = toys.filter((toy) => toy.id !== deleted);
    setToys(deletedToy);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm liftFormData={liftFormData} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} />
    </>
  );
}

export default App;
