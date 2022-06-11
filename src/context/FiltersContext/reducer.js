import { ACTION_TYPE } from '../../utils';

export const initialState = {
  searchText: '',
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SEARCH:
      return { ...state, searchText: payload };
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
