import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-white h-60"></div>
      <Content />
    </>
  );
};

export default Home;
