import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { EditModal } from '../../components';

export const UserRow = ({ user, onSelect, onDelete }) => {
  const { id, name, email, role, selected } = user;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr
        className={`${selected && 'bg-slate-100'} border-b-2 whitespace-nowrap`}
      >
        <td className='w-4 h-4 border-r-2 px-4 py-2'>
          <input
            type='checkbox'
            id={id}
            checked={selected}
            onChange={() => onSelect(id)}
          />
        </td>
        <td className='border-r-2 px-6 py-2'>{name}</td>
        <td className='border-r-2 px-6 py-2'>{email}</td>
        <td className='border-r-2 px-6 py-2'>{role}</td>
        <td className='border-r-2 px-6 py-2'>
          <div className='flex justify-start gap-6'>
            <button onClick={() => setShowModal(true)} title='Edit'>
              {' '}
              <PencilIcon className='h-6 w-6 text-slate-500 cursor-pointer' />
            </button>
            <button title='Delete' onClick={() => onDelete(id)}>
              {' '}
              <TrashIcon className='h-6 w-6 text-slate-500 cursor-pointer' />
            </button>
          </div>
        </td>
        {showModal && (
          <td>
            <EditModal user={user} onCancel={() => setShowModal(false)} />
          </td>
        )}
      </tr>
    </>
  );
};
