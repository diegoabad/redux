import { DECREMENT, INCREMENT, RESET } from './actionTypes';

export const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
