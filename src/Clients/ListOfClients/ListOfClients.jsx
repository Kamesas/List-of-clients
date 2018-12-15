import React from "react";
import { Image, List } from "semantic-ui-react";

const ListOfClients = ({ client, getClient }) => {
  const { general, job } = client;

  function thisClient() {
    getClient(client);
  }

  return (
    <List divided selection verticalAlign="middle">
      <List.Item onClick={thisClient}>
        <Image avatar circular src={general.avatar} />
        <List.Content>
          <List.Header>
            {general.firstName} {general.lastName}
          </List.Header>
          {job.title}
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ListOfClients;
