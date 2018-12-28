import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { updateContact } from "../../store/actions/actions";
import { connect } from "react-redux";
import UploadImg from "../UploadImg/UploadImg";

class EditClient extends Component {
  state = {
    progress: 0,
    firstName: this.props.client.general.firstName,
    lastName: this.props.client.general.lastName,
    avatar: this.props.client.general.avatar,
    email: this.props.client.contact.email,
    phone: this.props.client.contact.phone,
    city: this.props.client.address.city,
    country: this.props.client.address.country,
    street: this.props.client.address.street,
    zipCode: this.props.client.address.zipCode,
    company: this.props.client.job.company,
    title: this.props.client.job.title
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const {
      firstName,
      lastName,
      avatar,
      email,
      phone,
      city,
      country,
      street,
      zipCode,
      company,
      title
    } = this.state;

    const updateContact = {
      address: {
        city: city,
        country: country,
        street: street,
        zipCode: zipCode
      },
      contact: { email: email, phone: phone },
      general: { avatar: avatar, firstName: firstName, lastName: lastName },
      job: { company: company, title: title }
    };

    this.props.updateContact(this.props.id, updateContact);

    this.props.closeEditWindow();
    this.setState({ progress: "0" });
  };

  getUrl = url => {
    this.setState({ avatar: url });
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
          url={this.state.avatar}
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
          Save
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateContact: (id, uptClients) => dispatch(updateContact(id, uptClients))
});

export default connect(
  null,
  mapDispatchToProps
)(EditClient);
