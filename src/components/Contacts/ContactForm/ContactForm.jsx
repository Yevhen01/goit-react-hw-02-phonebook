import React from "react";
import PropTypes from "prop-types";

import {
  FormWrapper,
  InputBox,
  InputLabel,
  SubmitBtn,
} from "./ContactForm.styled";

export class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // SETUP TO PASS PROPS DATA TO PARENT
    this.props.onSubmit({ ...this.state });
    // SETUP TO RESET STATE
    this.setState({ name: "", number: "" });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;

    return (
      <>
        <FormWrapper onSubmit={handleSubmit} autoComplete="on">
          <InputLabel>Name</InputLabel>
          <InputBox
            type="text"
            name="name"
            placeholder="Enter your name ..."
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputLabel>Number</InputLabel>
          <InputBox
            type="tel"
            name="number"
            placeholder="Enter phone number ..."
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormWrapper>
      </>
    );
  }
}

// export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
