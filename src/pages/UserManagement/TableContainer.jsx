import { useEffect, useState } from 'react';
import { TableActions } from '../../components';
import { useData } from '../../context';
import { getUsers } from '../../services';
import { ACTION_TYPE } from '../../utils';
import { UsersTable } from './UsersTable';

export const TableContainer = () => {
  const {
    userState: { users },
    userDispatch,
  } = useData();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      userDispatch({ type: ACTION_TYPE.SUCCESS, payload: res.data });
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(users);

  return (
    <section className='mx-auto py-8 px-12'>
      <TableActions />
      {loading && <h1>Loading</h1>}
      {error && <h1>Unable to fetch data!</h1>}
      {users.length > 0 && <UsersTable />}
    </section>
  );
};
