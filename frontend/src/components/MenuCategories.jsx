import React from 'react';
import './MenuCategories.css';

const categories = [
  {
    name: 'Salad',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Rolls',
    img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Desserts',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Sandwich',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Cake',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Pure Veg',
    img: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Pasta',
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Noodles',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80',
  },
];

const MenuCategories = () => (
  <section className="menu-categories-section">
    <h2>Explore our menu</h2>
    <p className="menu-categories-desc">
      Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
    </p>
    <div className="menu-categories-row">
      {categories.map((cat) => (
        <div className="menu-category" key={cat.name}>
          <img src={cat.img} alt={cat.name} />
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default MenuCategories; 