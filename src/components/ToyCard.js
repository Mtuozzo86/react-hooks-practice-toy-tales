import React, { useState } from "react";

function ToyCard({ id, name, image, likes, onDelete }) {
  const [likeCount, setLikeCount] = useState(likes);

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likeCount + 1,
      }),
    })
      .then((resp) => resp.json())
      .then(() => setLikeCount((likeCount) => likeCount + 1));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likeCount} Likes </p>
      <button onClick={handleLike} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDelete} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
