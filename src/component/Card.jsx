import React from "react";
import "../assets/css/card.css"

const Card = ({ cardSrc, title, body }) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={cardSrc} alt="" />
      </div>
      <div className="body">
        <p className="title">{title}</p>
        <p className="text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
