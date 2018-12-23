import React, { Component } from "react";
import { connect } from "react-redux";
import { removeClient } from "../../store/actions/actions";
import { Image, List, Button } from "semantic-ui-react";
import "./ListOfClients.css";

class ListOfClients extends Component {
  state = {
    showBtn: false
  };

  thisClient = () => {
    this.props.getClient(this.props.client);
  };

  showSettingBtn = () => {
    this.setState({ showBtn: true });
  };

  hideSettingBtn = () => {
    this.setState({ showBtn: false });
  };

  editClient = () => {
    alert("edit");
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
        onMouseEnter={this.showSettingBtn}
        onMouseLeave={this.hideSettingBtn}
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

        {this.state.showBtn ? (
          <Button.Group size="mini" fluid style={{ marginTop: 10 }}>
            <Button color="green" onClick={this.editClient}>
              Edit
            </Button>
            <Button.Or />
            <Button color="red" onClick={this.delClient}>
              Delete
            </Button>
          </Button.Group>
        ) : null}
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
