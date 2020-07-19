import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  InitianalState = {
    name: '',
    number: '',
  };
  state = {
    ...this.InitianalState,
  };

 
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const item = {
      ...this.state,
      id: uuidv4(),
    };
    this.props.addContact(item);
    this.setState({ ...this.InitianalState });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Number
          <input
            type="phone"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
