import {
  INCREMENT_COUNT,
  INCREMENT_COUNT_BY,
  DECREMENT_COUNT,
  DECREMENT_COUNT_BY,
  RESET_COUNTER,
} from "../types/countTypes";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT: {
      return ++state;
    }
    case DECREMENT_COUNT: {
      return --state;
    }
    case INCREMENT_COUNT_BY: {
      console.log(state, payload);
      return state + Number(payload);
    }
    case DECREMENT_COUNT_BY: {
      return state - Number(payload);
    }
    case RESET_COUNTER: {
      return 0;
    }
    default:
      return state;
  }
};
