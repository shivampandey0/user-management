import React, { useState } from 'react';
import { useData } from '../../context';
import { ACTION_TYPE } from '../../utils';
import { ModalInput } from '../Input/ModalInput';

export const EditModal = ({ user, onCancel }) => {
  const [userInfo, setUserInfo] = useState(user);
  const { userDispatch } = useData();

  const onChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    userDispatch({
      type: ACTION_TYPE.UPDATE,
      payload: userInfo,
    });
    onCancel();
  };

  return (
    <div
      className='fixed top-0 right-0 left-0 z-10 w-screen h-screen backdrop-brightness-50 flex items-center justify-center'
      aria-hidden='true'
    >
      <div className=' p-4 w-full max-w-md h-full md:h-auto'>
        <div className='p-6 lg:px-8 bg-white rounded-lg shadow'>
          <h2 className='w-full text-center text-lg font-bold'>Edit User</h2>
          <form onSubmit={handleEdit} className='space-y-4 py-4'>
            <ModalInput
              name='name'
              title='Name'
              value={userInfo.name}
              onChange={onChange}
              autoFocus
            />
            <ModalInput
              name='email'
              type='email'
              title='Email'
              value={userInfo.email}
              onChange={onChange}
            />

            <ModalInput
              name='role'
              title='Role'
              value={userInfo.role}
              onChange={onChange}
            />

            <div className='flex gap-4 justify-end'>
              <button
                className='border-2 px-3 py-1 rounded-md bg-purple-500 text-white border-purple-500'
                type='submit'
              >
                Update
              </button>
              <button
                className='border-2 px-3 py-1 rounded-md bg-white border-gray-400 '
                onClick={onCancel}
                type='button'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
