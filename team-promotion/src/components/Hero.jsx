import React from 'react'

const Hero = () => {
  return (
    <div className='mx-auto text-white font-satoshi'>
        <div >
        <div className='relative max-w-[1000px] flex flex-col items-center gap-10 justify-center gap-5'>
            {/* <img src="hero.png" alt="" className='w-[800px]' /> */}
            <h1 className='text-6xl text-center max-w-[800px] font-bold'>Welcome to Binary Bros Where Innovation Meets Creativity</h1>
            <p className='text-center text-xl text-gray-500'>Step into a world of creativity and collaboration at Binary Bros – a place where everyone's ideas matter. Whether you're into design or coding, you'll find a home here among friends.</p>
            <div className='w-full h-[1px] bg-gray-500 bg-opacity-10'></div>
        </div>
        </div>
    </div>
  )
}

export default Hero