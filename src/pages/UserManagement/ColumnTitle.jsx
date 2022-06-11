import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';

export const ColumnTitle = ({ sortBy, sortOrder, onClick, title }) => {
  return (
    <th
      onClick={() => onClick(title.toLowerCase())}
      className={`border-r-2 px-6 py-2 ${onClick && 'cursor-pointer'}`}
    >
      <div className='flex items-center gap-2'>
        <h2> {title}</h2>
        {sortBy === title.toLowerCase() &&
          (sortOrder === 'ASC' ? (
            <ArrowDownIcon className='w-4 h-4 inline-block' />
          ) : (
            <ArrowUpIcon className='w-4 h-4 inline-block' />
          ))}
      </div>
    </th>
  );
};
