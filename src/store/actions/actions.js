import { FETCH_CLIENTS } from "../types";
import { firebaseClients } from "../../config/fbConfig";

export const fetchClients = () => async dispatch => {
  firebaseClients.on("value", snapshot => {
    dispatch({ type: FETCH_CLIENTS, payload: snapshot.val() });
  });
};

export const addClient = newClient => async dispatch => {
  firebaseClients.push().set(newClient);
};

export const removeClient = removeClientId => async dispatch => {
  firebaseClients.child(removeClientId).remove();
};

export const updateContact = (id, data) => async dispatch => {
  return firebaseClients
    .child(id)
    .update(data)
    .then(() => firebaseClients.once("value"))
    .then(snapshot => snapshot.val())
    .catch(error => ({
      errorCode: error.code,
      errorMessage: error.message
    }));
};
