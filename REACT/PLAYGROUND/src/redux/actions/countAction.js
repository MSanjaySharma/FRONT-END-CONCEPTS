import {
  INCREMENT_COUNT,
  INCREMENT_COUNT_BY,
  DECREMENT_COUNT,
  DECREMENT_COUNT_BY,
} from "../types/countTypes";

export const incrementCounter = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_COUNT });
  };
};

export const incrementCounterBy = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_COUNT_BY });
  };
};

export const decrementCounter = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_COUNT });
  };
};

export const decrementCounterBy = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_COUNT_BY });
  };
};
