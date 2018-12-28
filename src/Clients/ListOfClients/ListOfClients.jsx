import React, { Component } from "react";
import { connect } from "react-redux";
import { removeClient } from "../../store/actions/actions";
import { Image, List, Button } from "semantic-ui-react";
import EditClient from "../EditCLient/EditClient";
import EditModal from "../Modal/EditModal";
import "./ListOfClients.css";

class ListOfClients extends Component {
  state = {
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
    const stl = `list-of-clients ${active === client ? "active-item" : ""} ${
      active !== "" ? "no-active-item" : ""
    }`;
    return (
      <List.Item className={stl} id={id}>
        <Image
          avatar
          circular
          src={general.avatar ? general.avatar : ""}
          onClick={this.thisClient}
        />
        <List.Content onClick={this.thisClient}>
          <List.Header>
            {general.firstName ? general.firstName : ""}{" "}
            {general.lastName ? general.lastName : ""}
          </List.Header>
          {job.title ? job.title : ""}
        </List.Content>
        <Button
          compact
          circular
          size="mini"
          icon={this.props.showHideItem ? "angle up" : "angle down"}
          onClick={this.props.toggleOpenItem}
          className="btn-angel"
        />

        {this.props.showHideItem ? (
          <div className="btns-settings">
            <EditModal>
              <EditClient
                id={this.props.id}
                client={this.props.client}
                closeEditWindow={this.closeEditWindow}
              />
            </EditModal>
            <div>
              <Button color="red" size="mini" fluid onClick={this.delClient}>
                Delete
              </Button>
            </div>
          </div>
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
