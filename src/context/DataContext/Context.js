import { createContext, useContext, useReducer } from 'react';
import { dataReducer, initialState } from './reducer';

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
