import React from "react";
import { List, Header, Grid, Icon, Image } from "semantic-ui-react";

const ClientDetail = ({ client }) => {
  const { general, job, contact, address } = client;

  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src={general.avatar} />
      </Grid.Column>

      <Grid.Column width={12}>
        <Header as="h1">
          {general.firstName} {general.lastName}
        </Header>
        <List size={"big"}>
          <List.Item>
            <strong>Company: </strong> {job.company}
          </List.Item>
          <List.Item>
            <strong>Profession: </strong> {job.title}
          </List.Item>
        </List>

        <List>
          <List.Item>
            <Icon name="envelope" />
            {contact.email}
          </List.Item>
          <List.Item>
            <Icon name="phone" />
            {contact.phone}
          </List.Item>
        </List>

        <List>
          <List.Item>
            <strong>Country: </strong>
            {address.country}
          </List.Item>
          <List.Item>
            <strong>City: </strong> {address.city}
          </List.Item>
          <List.Item>
            <strong>Street: </strong> {address.street}
          </List.Item>
          <List.Item>
            <strong>ZipCode: </strong> {address.zipCode}
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default ClientDetail;
