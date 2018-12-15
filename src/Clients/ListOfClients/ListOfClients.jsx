import React from "react";
import { Image, List } from "semantic-ui-react";

const ListOfClients = () => (
  <List celled>
    <List.Item>
      <Image avatar circular src="/images/avatar/small/helen.jpg" />
      <List.Content>
        <List.Header>Snickerdoodle</List.Header>
        An excellent companion
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar circular src="/images/avatar/small/daniel.jpg" />
      <List.Content>
        <List.Header>Paulo</List.Header>
        He's also a dog
      </List.Content>
    </List.Item>
  </List>
);

export default ListOfClients;
