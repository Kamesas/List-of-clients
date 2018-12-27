import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { addClient } from "../../store/actions/actions";
import { connect } from "react-redux";
import { storage } from "../../config/fbConfig";

class AddClient extends Component {
  state = {
    image: null,
    url: "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",
    progress: 0,
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
      title: ""
    });
  };

  uploadFile = e => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        // complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    console.log(this.state.image, this.state.url);
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
        <Form.Group unstackable widths={2}>
          <Form.Input
            label="Upload file"
            type="file"
            size="mini"
            onChange={this.uploadFile}
          />
          <Button content="Upload" onClick={this.handleUpload} />
          <img src={this.state.url} alt="avatar" width="100" height="100" />
          <progress value={this.state.progress} max="100" />
        </Form.Group>
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
