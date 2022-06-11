import React from 'react';

export const ModalInput = ({
  title,
  name,
  value,
  autoFocus = false,
  type = 'text',
  onChange,
}) => {
  return (
    <div>
      <label
        className='block mb-2 text-sm font-medium text-gray-900 '
        htmlFor={name}
      >
        {title}{' '}
      </label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2'
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </div>
  );
};
