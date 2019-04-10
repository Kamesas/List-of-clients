export const testClient = newClient => async dispatch => {
  console.log(newClient);
  dispatch({ type: "Test", payload: console.log("from test") });
};

const initialState = "";

export const testClientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "test":
      return payload;

    default:
      return state;
  }
};
