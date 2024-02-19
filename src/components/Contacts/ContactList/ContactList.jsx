import PropTypes from "prop-types";

import {
  ContactListWrapper,
  ContactLiItem,
  ContactName,
  ContactNumber,
  DelBtn,
} from "./ContactList.styled";

export const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactLiItem key={id}>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DelBtn type="button" onClick={() => removeContact(id)}>
        Delete
      </DelBtn>
    </ContactLiItem>
  ));
  return <ContactListWrapper>{elements}</ContactListWrapper>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
