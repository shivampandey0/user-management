import React from 'react';
import { Button } from '../Button/Button';
import { SearchField } from './SearchField';

export const TableActions = ({ onDelete }) => {
  return (
    <div className='flex gap-4 flex-col items-center md:flex-row justify-between'>
      <SearchField />
      <Button title='Delete Selected' onClick={onDelete} />
    </div>
  );
};
