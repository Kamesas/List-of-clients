import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { addClient } from "../../store/actions/actions";
import { connect } from "react-redux";
import UploadImg from "../UploadImg/UploadImg";
import "./style.css";

class AddClient extends Component {
  state = {
    progress: 0,
    url: "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    street: "",
    zipCode: "",
    company: "",
    title: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const {
      url,
      firstName,
      lastName,
      email,
      phone,
      city,
      country,
      street,
      zipCode,
      company,
      title
    } = this.state;

    const newClient = {
      address: {
        city: city,
        country: country,
        street: street,
        zipCode: zipCode
      },
      contact: { email: email, phone: phone },
      general: {
        avatar: url,
        firstName: firstName,
        lastName: lastName
      },
      job: { company: company, title: title }
    };

    firstName !== "" || lastName !== ""
      ? this.props.addClient(newClient)
      : alert("enter the name");

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      street: "",
      zipCode: "",
      company: "",
      title: "",
      url: "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",
      progress: "0"
    });
  };

  getUrl = url => {
    this.setState({ url });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      title,
      city,
      country,
      zipCode,
      street
    } = this.state;
    return (
      <Form>
        <UploadImg
          getUrl={this.getUrl}
          url={this.state.url}
          progress={this.state.progress}
        />
        <hr />
        <Form.Group unstackable widths={2}>
          <Form.Input
            label="First name"
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last name"
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Company"
            placeholder="Company"
            name="company"
            value={company}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Profession"
            placeholder="Profession"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Phone"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Country"
            placeholder="Country"
            name="country"
            value={country}
            onChange={this.handleChange}
          />
          <Form.Input
            label="City"
            placeholder="City"
            name="city"
            value={city}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Street"
            placeholder="Street"
            name="street"
            value={street}
            onChange={this.handleChange}
          />
          <Form.Input
            label="ZipCode"
            placeholder="ZipCode"
            name="zipCode"
            value={zipCode}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button type="submit" color="green" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addClient: newClients => dispatch(addClient(newClients))
});

export default connect(
  null,
  mapDispatchToProps
)(AddClient);
