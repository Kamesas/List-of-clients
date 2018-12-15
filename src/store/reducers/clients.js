import { FETCH_CLIENTS } from "../types";

const initialState = "loading";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CLIENTS:
      return payload;

    default:
      return state;
  }
};
