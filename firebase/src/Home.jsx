// src/Home.js
import React from 'react';
import { auth } from './firebase';

function Home() {
  const currentUser = auth.currentUser;

  return (
    <div>
      <h2 className='text-center text-white font-bold text-3xl mt-[300px]'>Welcome, {currentUser ? currentUser.email : 'Guest'}</h2>
    </div>
  );
}

export default Home;
