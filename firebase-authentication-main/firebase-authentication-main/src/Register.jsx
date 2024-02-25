// Register.js
import React, { useState } from 'react';
import { auth } from './firebase';
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Send verification email
      await sendEmailVerification(auth.currentUser);
      alert('Verification email sent. Please verify your email.');
      // Redirect to login page after successful registration and verification
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='max-w-[500] flex flex-col justify-center items-center gap-10 mx-auto mt-[200px]'>
      <h2 className='font-bold text-3xl text-white'>Register</h2>
      <form className='w-[500px] h-fit px-5 py-4 rounded-2xl flex flex-col justify-center items-center gap-5 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onSubmit={handleRegister}>
        <input className='w-full h-[60px] placeholder:font-semibold px-2 py-2 rounded-xl bg-gray-100' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='w-full h-[60px] placeholder:font-semibold px-2 py-2 rounded-xl bg-gray-100' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='w-full h-[60px] rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-bold' type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
