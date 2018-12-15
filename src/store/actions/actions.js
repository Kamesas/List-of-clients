import { FETCH_CLIENTS } from "../types";

export const fetchClients = () => dispach => {
  let url = "http://localhost:3004/clients";
  fetch(url).then(data => {
    data.json().then(dataJson => {
      return dispach({ type: FETCH_CLIENTS, payload: dataJson });
    });
  });
};
