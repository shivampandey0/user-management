import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='relative md:w-4/12'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <SearchIcon className='h-5 w-5 text-slate-500' />
      </div>
      <input
        className='border-2 border-gray-300 w-80 md:w-full md: pl-10 p-2.5 rounded-md '
        type='search'
        placeholder='Search by name, email or role'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
