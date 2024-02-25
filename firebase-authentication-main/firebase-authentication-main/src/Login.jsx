// Login.jsx
import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user && user.emailVerified) {
        navigate('/home'); // Redirect to home page if user is logged in and email is verified
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user && user.emailVerified) {
        navigate('/'); 
      } else {
        setError('Please verify your email before logging in.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='max-w-[500] flex flex-col justify-center items-center gap-10 mx-auto mt-[200px]'>
      <h2 className='font-bold text-3xl text-white'>Login</h2>
      {error && <p>{error}</p>}
      <form className='w-[500px] h-fit px-5 py-4 rounded-2xl flex flex-col justify-center items-center gap-5 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onSubmit={handleLogin}>
        <input className='w-full h-[60px] placeholder:font-semibold px-2 py-2 rounded-xl bg-gray-100' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='w-full h-[60px] placeholder:font-semibold px-2 py-2 rounded-xl bg-gray-100' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='w-full h-[60px] rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-bold'  type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
