import React from "react";
import { Input } from "semantic-ui-react";

const SearchInput = ({ searchHandle }) => (
  <Input
    icon="search"
    placeholder="Search clients..."
    fluid
    onChange={searchHandle}
  />
);

export default SearchInput;
