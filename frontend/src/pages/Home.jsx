import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import TopDishes from '../components/TopDishes';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <TopDishes />
      {/* FoodList, Footer will go here */}
      <main>
        <div style={{height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#aaa'}}>Food list coming soon...</div>
      </main>
    </>
  );
};

export default Home; 