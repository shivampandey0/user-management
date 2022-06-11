import { useEffect, useMemo, useState } from 'react';
import { Pagination, TableActions } from '../../components';
import { useData, useFilter } from '../../context';
import { getUsers } from '../../services';
import { ACTION_TYPE } from '../../utils';
import { UsersTable } from './UsersTable';

export const TableContainer = () => {
  const {
    userState: { users },
    userDispatch,
  } = useData();
  const { filteredData } = useFilter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentUsers = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users, filteredData]);

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

  const handleDeleteSelected = () => {
    userDispatch({
      type: ACTION_TYPE.DELETE_SELECTED,
    });
  };

  return (
    <section className='mx-auto py-8 px-12 lg:w-2/3 w-full'>
      <TableActions onDelete={handleDeleteSelected} />
      {loading && <h1>Loading</h1>}
      {error && <h1>Unable to fetch data!</h1>}
      {filteredData.length > 0 && <UsersTable users={currentUsers} />}
      <Pagination
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};
