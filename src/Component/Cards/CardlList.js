import React from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
