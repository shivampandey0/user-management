export const ACTION_TYPE = {
  SUCCESS: 'SUCCESS',
};

export const DOTS = '...';

export const range = (start, totalCount) => {
  return [...Array(totalCount).keys()].map((i) => i + start);
};
