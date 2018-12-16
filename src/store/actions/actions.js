import { FETCH_CLIENTS } from "../types";
import axios from "axios";

/* export const fetchClients = () => dispach => {
  let url = "http://localhost:3004/clients";
  fetch(url).then(data => {
    data.json().then(dataJson => {
      return dispach({ type: FETCH_CLIENTS, payload: dataJson });
    });
  });
}; */

export const fetchClients = () => dispach => {
  //let url = "http://localhost:3004/clients";
  //let urlLocal = "clients.json";
  let fromFirebase = "https://listofclients-a081f.firebaseio.com/clients.json";
  axios
    .get(fromFirebase)
    .then(function(response) {
      //console.log(response.status);
      return dispach({ type: FETCH_CLIENTS, payload: response.data });
    })
    .catch(function(error) {
      console.log(error);
    });
};
