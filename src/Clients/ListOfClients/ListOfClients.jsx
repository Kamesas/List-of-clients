import React from "react";
import { Image, List } from "semantic-ui-react";
import "./ListOfClients.css";

const ListOfClients = ({ client, id, getClient, active }) => {
  const { general, job } = client;

  function thisClient() {
    getClient(client);
  }

  return (
    <List.Item
      onClick={thisClient}
      className={`list-of-clients ${active === client ? "active-item" : ""} ${
        active !== "" ? "no-active-item" : ""
      }`}
      id={id}
    >
      <Image avatar circular src={general.avatar ? general.avatar : ""} />
      <List.Content>
        <List.Header>
          {general.firstName ? general.firstName : ""}{" "}
          {general.lastName ? general.lastName : ""}
        </List.Header>
        {job.title ? job.title : ""}
      </List.Content>
    </List.Item>
  );
};

export default ListOfClients;
