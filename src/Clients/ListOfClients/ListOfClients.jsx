import React from "react";
import { Image, List } from "semantic-ui-react";

const ListOfClients = ({ client }) => (
  <List divided selection verticalAlign="middle">
    <List.Item>
      <Image avatar circular src={client.general.avatar} />
      <List.Content>
        <List.Header>
          {client.general.firstName} {client.general.lastName}
        </List.Header>
        {client.job.title}
      </List.Content>
    </List.Item>
  </List>
);

export default ListOfClients;
