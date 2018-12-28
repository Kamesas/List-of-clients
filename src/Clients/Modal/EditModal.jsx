import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class EditModal extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")} fluid color="green" size="mini">
          Edit
        </Button>

        <Modal open={open} onClose={this.close}>
          <Header icon="user outline" content="Edit the  card of client" />
          <Modal.Content image>
            <Modal.Description>{this.props.children}</Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              icon="close"
              labelPosition="right"
              content="Cancel"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
