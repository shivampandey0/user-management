export const ACTION_TYPE = {
  SUCCESS: 'SUCCESS',
  SELECT: 'SELECT',
  SELECT_ALL: 'SELECT_ALL',
  DELETE: 'DELETE',
  DELETE_SELECTED: 'DELETE_SELECTED',
  UPDATE:'UPDATE',
  SEARCH: 'SEARCH'
};

export const DOTS = '...';

export const range = (start, totalCount) => {
  return [...Array(totalCount).keys()].map((i) => i + start);
};
