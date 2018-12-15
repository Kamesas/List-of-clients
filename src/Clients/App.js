import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import ListOfClients from "./ListOfClients/ListOfClients";
import ClientDetail from "./ClientDetails/ClientDetail";
import SearchInput from "./SearchInput/SearchInput";
import clients from "../db/clients.json";

class App extends Component {
  state = {
    clientsDetails: ""
  };

  getClient = client => {
    this.setState({ clientsDetails: client });
  };

  render() {
    const { clientsDetails } = this.state;
    console.log(clientsDetails);
    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Column width={4}>
            <SearchInput />
            {clients.map((client, i) => (
              <ListOfClients
                key={i}
                client={client}
                getClient={this.getClient}
              />
            ))}
          </Grid.Column>
          <Grid.Column width={12}>
            {clientsDetails !== "" ? (
              <ClientDetail client={clientsDetails} />
            ) : (
              "Select the customer from on the left list"
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
