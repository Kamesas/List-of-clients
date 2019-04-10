export const testClient = newClient => async dispatch => {
  console.log(newClient);
  dispatch({ type: "Test", payload: newClient });
};

const initialState = "";

export const testClientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Test":
      return (state = payload);

    default:
      return state;
  }
};
