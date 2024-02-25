import React from 'react';
import Card from './Card';

const members = [
  { name: 'Rituraj Jha', designation: 'UI UX Designer', imagePath: '/photo.png' },
  { name: 'Ganesh Rana', designation: 'Backend Developer', imagePath: '/gn.png' },
  { name: 'Divyanshu Chouhan', designation: 'Frontend Developer', imagePath: '/dc.png' },
  { name: 'Aahil Sheikh', designation: 'AI-ML', imagePath: '/ah.png' }
];

const CardContainer = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <h2 className='text-center text-4xl mb-5 font-satoshi text-white'>Meet Community <span className='text-purple-800 font-'>Members</span></h2>
      <div className='flex items-center justify-evenly gap-10'>
        {members.map((member, index) => (
          <Card key={index} name={member.name} designation={member.designation} imagePath={member.imagePath} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
