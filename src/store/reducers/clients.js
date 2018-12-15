import clients from "../../db/clients.json";

const initialState = clients;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_CLIENTS":
      return payload;

    default:
      return state;
  }
};
