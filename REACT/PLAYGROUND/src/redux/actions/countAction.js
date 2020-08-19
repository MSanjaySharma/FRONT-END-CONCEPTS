import {
  INCREMENT_COUNT,
  INCREMENT_COUNT_BY,
  DECREMENT_COUNT,
  DECREMENT_COUNT_BY,
  RESET_COUNTER,
} from "../types/countTypes";

export const incrementCounter = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_COUNT });
  };
};

export const incrementCounterBy = (payload) => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_COUNT_BY, payload });
  };
};

export const decrementCounter = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_COUNT });
  };
};

export const decrementCounterBy = (payload) => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_COUNT_BY, payload });
  };
};

export const resetCounter = () => {
  return (dispatch) => {
    dispatch({ type: RESET_COUNTER });
  };
};
