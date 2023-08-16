import React from "react";

const Card = ({ number, onDelete }) => {
  return (
    <div className="card">
      <span>{number}</span>
      <button className="close" onClick={() => onDelete(number)}>
        X
      </button>
    </div>
  );
};

export default Card;
