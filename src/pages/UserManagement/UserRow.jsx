import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';

export const UserRow = ({ id, name, email, role, selected }) => {
  return (
    <tr className='border-b-2 whitespace-nowrap'>
      <td className='w-4 h-4 border-r-2 px-4 py-2'>
        <input type='checkbox' id={id} checked={selected} />
      </td>
      <td className='border-r-2 px-6 py-2'>{name}</td>
      <td className='border-r-2 px-6 py-2'>{email}</td>
      <td className='border-r-2 px-6 py-2'>{role}</td>
      <td className='border-r-2 px-6 py-2'>
        <div className='flex justify-start gap-6'>
          <button title='Edit'>
            {' '}
            <PencilIcon className='h-6 w-6 text-slate-500 cursor-pointer' />
          </button>
          <button title='Delete'>
            {' '}
            <TrashIcon className='h-6 w-6 text-slate-500 cursor-pointer' />
          </button>
        </div>
      </td>
    </tr>
  );
};
