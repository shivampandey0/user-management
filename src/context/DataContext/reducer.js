import { ACTION_TYPE } from '../../utils';

export const initialState = {
  users: [],
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SUCCESS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
