import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/actions";
import ListOfClients from "./ListOfClients/ListOfClients";
import ClientDetail from "./ClientDetails/ClientDetail";
import SearchInput from "./SearchInput/SearchInput";
import Loader from "./Loader/Loader";
import _ from "lodash";
import AddClient from "../Clients/AddClient/AddClient";
import Modal from "../Clients/Modal/Modal";
import "./App.css";
import Accardion from "./HOC/Accardion";

class App extends Component {
  state = {
    clientsDetails: "",
    finded: ""
  };

  searchHandle = e => {
    this.setState({ finded: e.target.value });
  };

  displayClients(clients) {
    const serchValue = this.state.finded.toLowerCase();

    if (this.state.finded.length === 0) {
      return clients;
    }

    return _.filter(clients, el => {
      if (el !== null) {
        const { firstName, lastName } = el.props.client.general;
        const { company, title } = el.props.client.job;
        const { email, phone } = el.props.client.contact;
        const { street, city, zipCode, country } = el.props.client.address;
        const all =
          firstName +
          lastName +
          company +
          title +
          email +
          phone +
          street +
          city +
          zipCode +
          country;

        //return all.toLowerCase().indexOf(serchValue) > -1;
        return all.toLowerCase().includes(serchValue);
      }
    });
  }

  getClient = client => {
    this.setState({ clientsDetails: client });
    if (this.props.openItemId !== null) {
      this.props.openItemIdRefresh();
    }
  };

  componentDidMount() {
    console.log(this.props.auth);
    // console.log(this.props.fetchClients());
    this.props.fetchClients();
    // const { auth } = this.props;
    // this.props.fetchToDos(auth.uid);
  }

  render() {
    const { clientsDetails } = this.state;
    const { clients } = this.props;

    const listClients = _.map(clients, (client, key) =>
      client ? (
        <ListOfClients
          key={key}
          id={key}
          client={client}
          getClient={this.getClient}
          active={clientsDetails}
          showHideItem={key === this.props.openItemId}
          toggleOpenItem={this.props.toggleOpenItem(key)}
        />
      ) : null
    );

    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Column width={4}>
            <SearchInput searchHandle={this.searchHandle} />

            <List selection verticalAlign="middle" className="ul-clients-list">
              {clients !== "" ? this.displayClients(listClients) : <Loader />}
            </List>
          </Grid.Column>

          <Grid.Column width={12}>
            {clientsDetails !== "" ? (
              <ClientDetail client={clientsDetails} />
            ) : (
              "Select the customer from on the left list"
            )}
            <Modal>
              <AddClient />
            </Modal>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch(fetchClients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accardion(App));
