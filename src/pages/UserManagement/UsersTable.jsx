import { UserRow } from './UserRow';

export const UsersTable = ({ users }) => {
  return (
    <div className=' mx-auto overflow-auto'>
      <table className=' w-full table-auto border-collapse text-md text-left text-gray-500 border-2 my-8'>
        <thead className='text-lg text-gray-700 border-b-2'>
          <tr>
            <th scope='col' className='border-r-2 px-4 py-2'>
              <input
                type='checkbox'
                className=' bg-gray-100 border-gray-300 rounded'
              />
            </th>
            <th className='border-r-2 px-6 py-2'>Name</th>
            <th className='border-r-2 px-6 py-2'>Email</th>
            <th className='border-r-2 px-6 py-2'>Role</th>
            <th className='border-r-2 px-6 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
