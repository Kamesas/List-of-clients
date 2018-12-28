import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class WindowModal extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button
          onClick={this.show("blurring")}
          circular
          color="green"
          icon="plus"
          size="big"
          className="btn-add-client"
        />

        <Modal open={open} onClose={this.close}>
          <Header icon="user outline" content="Add new client" />
          <Modal.Content image>
            <Modal.Description>{this.props.children}</Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              icon="close"
              labelPosition="right"
              content="Close"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default WindowModal;
