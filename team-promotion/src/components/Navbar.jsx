import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex w-[500px] text-white font-satoshi h-20 px-5 py-2 mt-10 rounded-full bg-white bg-opacity-5 mx-auto items-center justify-between'>
            <div><h1 className='text-2xl font-bold'>Binary Bros</h1></div>
            <div className='bg-purple-800 px-10 py-4 rounded-full hover:bg-purple-950 duration-300'><button className='text-xl'>Explore</button></div>
        </div>
    </>
  )
}

export default Navbar
