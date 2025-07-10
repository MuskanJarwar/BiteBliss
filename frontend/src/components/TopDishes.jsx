import React from 'react';
import './TopDishes.css';
import { food_list } from '../assets/assets';
import addIcon from '../assets/add_icon_white.png';

function TopDishes() {
  return (
    <section className="top-dishes-section">
      <h2>Top dishes near you</h2>
      <div className="top-dishes-grid">
        {food_list.map((dish) => (
          <div className="dish-card" key={dish._id}>
            <div className="dish-img-container">
              <img src={dish.image} alt={dish.name} className="dish-img" />
              <button className="add-btn">
                <img src={addIcon} alt="Add" />
              </button>
            </div>
            <div className="dish-info">
              <div className="dish-title-row">
                <span className="dish-name">{dish.name}</span>
              </div>
              <div className="dish-desc">{dish.description}</div>
              <div className="dish-price">${dish.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDishes; 