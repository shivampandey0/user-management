import { createContext, useContext, useReducer } from 'react';
import { filterReducer, initialState, searchUsers } from './reducer';
import { useData } from '../';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  const { userState } = useData();

  const filteredData = searchUsers(filterState, userState.users);
  
  
  return (
    <FilterContext.Provider
      value={{ filteredData, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
