import React, { Component,useState } from 'react';
import './App.css';
import ContactForm from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    count: 0
  };
componentDidMount() {
  const resLocalStorage = localStorage.getItem('contacts')
  if(resLocalStorage){
    
    this.setState({contacts: JSON.parse(resLocalStorage)})
  }
}
componentDidUpdate(prevProps, prevState) {
  if(prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}

 
  checkOnFilter = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(contact => {
        const res = contact.name.toLowerCase().includes(filter.toLowerCase());
        return res;
      });
    }
    return contacts;
  };
  checkUniqueUser = contactItem => {
    const { contacts } = this.state;
    const isUnique = contacts.some(
      item =>
        item.name.toLocaleLowerCase() === contactItem.name.toLocaleLowerCase(),
    );

    return isUnique;
  };
  addContact = contactItem => {
    const uniqueUser = this.checkUniqueUser(contactItem);
    if (uniqueUser) {
      alert(`${contactItem.name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, contactItem],
    }));
  };
  handleFilter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  deleteItem = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    // console.log(this.state.contacts)
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1> Phonebook </h1>
        <ContactForm addContact={this.addContact} />
        <h2> Contacts </h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <br />
        <ContactList
          contacts={this.checkOnFilter()}
          deleteItem={this.deleteItem}
        />
       
      </div>
    );
  }
}

export default App;











