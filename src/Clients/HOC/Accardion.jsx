import React, { Component } from "react";

function Accardion(WrappedComponent) {
  return class Accardion extends Component {
    state = { openItemId: null };

    toggleOpenItem = openItemId => () => {
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
}

export default Accardion;
