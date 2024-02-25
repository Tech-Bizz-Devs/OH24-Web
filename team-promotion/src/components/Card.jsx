import React from 'react';

const Card = ({ name, designation, imagePath }) => {
  return (
    <div className='relative flex items-end w-[300px] font-satoshi text-white h-[320px] bg-purple-900 bg-opacity-50 overflow-hidden rounded-3xl hover:border-[6px] hover:border-gray-600 duration-150'>
      <img className='absolute scale-[120%] z-2 bottom-0 opacity-80' src={imagePath} alt="" />
      <div className="absolute -bottom-5 left-0 w-full h-[200px]" style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0))"}}></div>
      <div className='px-5 py-5 flex flex-col gap-2' style={{ zIndex: 99 }}>
        <h2 className='text-2xl'>{name}</h2>
        <div className='bg-purple-900 w-fit px-2 py-2 rounded-lg'><h3 className='font-bold'>{designation}</h3></div>
      </div>
    </div>
  );
};

export default Card;
