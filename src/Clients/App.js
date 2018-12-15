import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import ListOfClients from "./ListOfClients/ListOfClients";
import ClientDetail from "./ClientDetails/ClientDetail";
import SearchInput from "./SearchInput/SearchInput";

class App extends Component {
  render() {
    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Column width={4}>
            <SearchInput />
            <ListOfClients />
          </Grid.Column>
          <Grid.Column width={12}>
            <ClientDetail />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
