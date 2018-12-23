import React, { Component } from "react";
import { connect } from "react-redux";
import { removeClient } from "../../store/actions/actions";
import { Image, List, Button } from "semantic-ui-react";
import EditClient from "../EditCLient/EditClient";
import EditModal from "../Modal/EditModal";
import "./ListOfClients.css";

class ListOfClients extends Component {
  state = {
    showBtn: false,
    edit: false
  };

  thisClient = () => {
    this.props.getClient(this.props.client);
  };

  showHideSettings = () => {
    this.setState({ showBtn: !this.state.showBtn });
  };

  editClient = () => {
    this.setState({ edit: true });
  };

  closeEditWindow = () => {
    this.setState({ edit: false });
  };

  delClient = () => {
    window.confirm("Are you sure you wish to delete this item?") &&
      this.props.removeClient(this.props.id);
  };

  render() {
    const { client, id, active } = this.props;
    const { general, job } = client;
    return (
      <List.Item
        onClick={this.thisClient}
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
        <Button
          compact
          circular
          floated="right"
          icon={this.state.showBtn ? "angle up" : "angle down"}
          onClick={this.showHideSettings}
        />
        <div>
          {this.state.showBtn ? (
            <Button.Group size="mini" fluid style={{ marginTop: 10 }}>
              <EditModal>
                <EditClient
                  id={this.props.id}
                  client={this.props.client}
                  closeEditWindow={this.closeEditWindow}
                />
              </EditModal>
              <Button.Or />
              <Button color="red" onClick={this.delClient}>
                Delete
              </Button>
            </Button.Group>
          ) : null}
        </div>
      </List.Item>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeClient: id => dispatch(removeClient(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListOfClients);
