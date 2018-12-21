import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

class WindowModal extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button
          onClick={this.show("blurring")}
          circular
          icon="plus"
          size="big"
        />

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
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

/* import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const WindowModal = () => (
  <Modal trigger={<Button circular icon="plus" size="big" />} closeIcon>
    <Header icon="user outline" content="Add new client" />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> No
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default WindowModal; */
