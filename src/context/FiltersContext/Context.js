import { createContext, useContext, useReducer } from 'react';
import {
  filterReducer,
  initialState,
  searchUsers,
  sortUsersTable,
} from './reducer';
import { useData } from '../';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  const { userState } = useData();

  let filteredData = searchUsers(filterState, userState.users);
  filteredData = sortUsersTable(filterState, filteredData);

  return (
    <FilterContext.Provider
      value={{ filteredData, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
