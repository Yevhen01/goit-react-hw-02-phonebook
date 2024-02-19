import React from 'react';
import { nanoid } from 'nanoid';

import ContactsDemo from './contactDemo.json';
import { Container, Title, SubTitle } from './App.styled';

import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactList } from './Contacts/ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';

class App extends React.Component {
  state = {
    contacts: ContactsDemo,
    search: '',
  };

  addContact = data => {
    const { contacts } = this.state;

    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (dublicate) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  getFilteredContacts() {
    const { search, contacts } = this.state;
    // checking for empty string
    if (!search) {
      return contacts;
    }
    const filterValue = search.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
  }

  handleSearch = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  render() {
    const { handleSearch, removeContact, addContact } = this;
    const contacts = this.getFilteredContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <SubTitle>Contacts</SubTitle>
        <SearchContact handleFilter={handleSearch} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </Container>
    );
  }
}
export default App;
