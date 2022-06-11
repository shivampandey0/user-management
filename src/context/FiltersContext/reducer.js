import { ACTION_TYPE } from '../../utils';

export const initialState = {
  searchText: '',
  sortBy: '',
  sortOrder: '',
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SEARCH:
      return { ...state, searchText: payload };
    case ACTION_TYPE.SORT:
      return {
        ...state,
        sortBy: payload,
        sortOrder: state.sortBy === payload ? 'DESC' : 'ASC',
      };
    default:
      state;
  }
};

export const searchUsers = ({ searchText }, data) => {
  if (searchText) {
    return data.filter(
      ({ name, email, role }) =>
        name.toLowerCase().includes(searchText.toLowerCase()) ||
        email.toLowerCase().includes(searchText.toLowerCase()) ||
        role.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return data;
};

export const sortUsersTable = ({ sortBy, sortOrder }, data) => {
  const compare = (prev, curr) => {
    if (prev[sortBy] < curr[sortBy]) {
      return -1;
    }
    if (curr[sortBy > prev[sortBy]]) {
      return 1;
    }
    return 0;
  };
  if (sortBy) {
    if (sortOrder === 'ASC') {
      return [...data].sort(compare);
    } else {
      return [...data].sort((prev, curr) => compare(curr, prev));
    }
  }
  return data;
};
