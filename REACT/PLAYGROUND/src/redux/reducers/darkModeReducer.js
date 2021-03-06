import { TOGGLE_DARK_MODE } from "../types/darkModeTypes";

export default (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_DARK_MODE: {
      return payload;
    }
    default:
      return state;
  }
};
