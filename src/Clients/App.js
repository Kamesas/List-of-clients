import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/actions";
import ListOfClients from "./ListOfClients/ListOfClients";
import ClientDetail from "./ClientDetails/ClientDetail";
import SearchInput from "./SearchInput/SearchInput";

class App extends Component {
  state = {
    clientsDetails: ""
  };

  getClient = client => {
    this.setState({ clientsDetails: client });
  };

  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    const { clientsDetails } = this.state;
    const { clients } = this.props;

    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Column width={4}>
            <SearchInput />
            {clients !== ""
              ? clients.map((client, i) => (
                  <ListOfClients
                    key={i}
                    client={client}
                    getClient={this.getClient}
                  />
                ))
              : "loading"}
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

const mapStateToProps = state => ({
  clients: state.clients
});

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch(fetchClients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
