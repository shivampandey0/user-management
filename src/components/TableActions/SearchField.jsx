import { SearchIcon } from '@heroicons/react/solid';
import { useCallback, useState } from 'react';
import { useFilter } from '../../context';
import { ACTION_TYPE } from '../../utils';

export const SearchField = () => {
  const { filterDispatch } = useFilter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    console.log(value);
    filterDispatch({ type: ACTION_TYPE.SEARCH, payload: value });
  };

  const debounce = (func, delay) => {
    let timerId;
    return function () {
      clearTimeout(timerId);
      const term = arguments[0];
      timerId = setTimeout(() => {
        func(term);
      }, delay);
    };
  };

  const submitSearch = useCallback(debounce(handleSearch, 500), []);

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
        onChange={(e) => {
          setSearchTerm(e.target.value);
          submitSearch(e.target.value);
        }}
      />
    </div>
  );
};
