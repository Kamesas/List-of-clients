import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const LoaderExampleText = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size="mini" inverted />
      </Dimmer>
    </Segment>
  </div>
);

export default LoaderExampleText;
