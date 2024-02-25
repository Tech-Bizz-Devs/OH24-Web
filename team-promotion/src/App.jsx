import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div className='flex max-w-[1400px] mx-auto flex-col gap-[30px]'>
      <Navbar />
      <Hero />
      <CardContainer/>
   
    </div>
  );
};

export default App;
