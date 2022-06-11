import { ACTION_TYPE } from '../../utils';

export const initialState = {
  users: [],
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SUCCESS: {
      const users = payload.map((user) => ({ ...user, selected: false }));
      return { ...state, users };
    }
    case ACTION_TYPE.SELECT: {
      const users = state.users.map((user) => {
        if (user.id === payload.id) {
          return { ...user, selected: !user.selected };
        }
        return user;
      });
      return { ...state, users };
    }

    case ACTION_TYPE.DELETE: {
      const users = state.users.filter((user) => user.id !== payload.id);
      return { ...state, users };
    }

    case ACTION_TYPE.SELECT_ALL: {
      const currentPageUserIds = new Set();
      payload.users.forEach((user) => currentPageUserIds.add(user.id));

      const users = state.users.map((user) => {
        if (currentPageUserIds.has(user.id)) {
          return { ...user, selected: payload.checked };
        }
        return user;
      });

      return { ...state, users };
    }

    case ACTION_TYPE.DELETE_SELECTED: {
      const users = state.users.filter((user) => !user.selected);
      return { ...state, users };
    }

    case ACTION_TYPE.UPDATE: {
        console.log(payload);
      const users = state.users.map((user) => {
        if (user.id === payload.id) {
          return { ...user, ...payload };
        }
        return user;
      });

      return { ...state, users };
    }

    default:
      return state;
  }
};
