import React from 'react';

export const Button = ({ title, onClick }) => {
  return (
    <button
      className='border-2 text-gray-400 whitespace-nowrap w-fit rounded-sm px-4 py-2 border-gray-300'
      onClick={onClick}
    >
      {title}
    </button>
  );
};
