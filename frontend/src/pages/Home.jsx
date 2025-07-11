import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import TopDishes from '../components/TopDishes';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <TopDishes />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home; 