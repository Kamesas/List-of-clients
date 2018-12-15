import React from "react";
import { List, Header, Grid, Icon, Image } from "semantic-ui-react";

const ClientDetail = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src="/images/avatar/small/helen.jpg" />
      </Grid.Column>
      <Grid.Column width={12}>
        <Header as="h1">Name SecondName</Header>
        <List size={"big"}>
          <List.Item>
            <strong>Company: </strong> company
          </List.Item>
          <List.Item>
            <strong>Profession: </strong> profession
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Icon name="envelope" />
            email
          </List.Item>
          <List.Item>
            <Icon name="phone" />
            phone
          </List.Item>
        </List>

        <List>
          <List.Item>
            <strong>Country: </strong>
            country
          </List.Item>
          <List.Item>
            <strong>City: </strong> city
          </List.Item>
          <List.Item>
            <strong>Street: </strong> street
          </List.Item>
          <List.Item>
            <strong>ZipCode: </strong> zipCode
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default ClientDetail;
