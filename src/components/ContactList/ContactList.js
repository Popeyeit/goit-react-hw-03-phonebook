import React from 'react';

const ContactList = ({ contacts, deleteItem }) => {
  console.log(deleteItem);
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: <span> {number} </span>
          </p>
          <button id={id} onClick={deleteItem} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
