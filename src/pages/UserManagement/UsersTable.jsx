import { useData, useFilter } from '../../context';
import { UserRow } from './UserRow';
import { ACTION_TYPE } from '../../utils';
import { ColumnTitle } from './ColumnTitle';

export const UsersTable = ({ users }) => {
  const { userDispatch } = useData();
  const {
    filterState: { sortBy, sortOrder },
    filterDispatch,
  } = useFilter();

  const handleSelectAll = (e) => {
    userDispatch({
      type: ACTION_TYPE.SELECT_ALL,
      payload: { users, checked: e.target.checked },
    });
  };

  const handleSelect = (id) => {
    userDispatch({
      type: ACTION_TYPE.SELECT,
      payload: { id },
    });
  };

  const handleDelete = (id) => {
    userDispatch({
      type: ACTION_TYPE.DELETE,
      payload: { id },
    });
  };

  const onTitleClick = (title) => {
    filterDispatch({ type: ACTION_TYPE.SORT, payload: title });
  };

  return (
    <div className=' mx-auto overflow-auto'>
      <table className=' w-full table-auto border-collapse text-md text-left text-gray-500 border-2 my-8'>
        <thead className='text-lg text-gray-700 border-b-2'>
          <tr>
            <th scope='col' className='border-r-2 px-4 py-2'>
              <input
                type='checkbox'
                className=' bg-gray-100 border-gray-300 rounded'
                onChange={handleSelectAll}
              />
            </th>

            <ColumnTitle
              title='Name'
              sortBy={sortBy}
              sortOrder={sortOrder}
              onClick={onTitleClick}
            />
            <ColumnTitle
              title='Email'
              sortBy={sortBy}
              sortOrder={sortOrder}
              onClick={onTitleClick}
            />
            <ColumnTitle
              title='Role'
              sortBy={sortBy}
              sortOrder={sortOrder}
              onClick={onTitleClick}
            />
            <ColumnTitle title='Actions' />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              onSelect={handleSelect}
              onDelete={handleDelete}
              key={user.id}
              user={user}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
