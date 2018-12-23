import { FETCH_CLIENTS, REMOVE_CLIENTS } from "../types";
import { firebaseClients } from "../../config/fbConfig";

export const fetchClients = () => async dispatch => {
  firebaseClients.on("value", snapshot => {
    dispatch({ type: FETCH_CLIENTS, payload: snapshot.val() });
  });
};

export const addClient = newClient => async dispatch => {
  firebaseClients.push().set(newClient);
};

// export const removeClient = removeClientId => async dispatch => {
//   firebaseClients.child(removeClientId).remove();
// };

export const removeClient = removeClientId => async dispatch => {
  firebaseClients
    .child(removeClientId)
    .remove()
    .then(() => {
      dispatch({ type: REMOVE_CLIENTS, payload: removeClientId });
    });
};
