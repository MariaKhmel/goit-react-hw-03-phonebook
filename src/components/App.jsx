import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactsList} from './ContactsList/ContactsList'
import {Filter} from './Filter/Filter'
import { nanoid } from 'nanoid';

export class App extends Component {

state = {
contacts: [],
filter: '',
}

handleFormChange = (data) => {
    const newContact = {
      id: nanoid(),
      ...data,
  }
  const newContactName = data.name;
  if (this.isContactinList(newContactName)) {
    alert(`${newContactName} is already in contacts.`)
    return; 
  }
    this.setState(prevstate => {
    const newContactsList = [...prevstate.contacts,newContact];
      return {
        contacts: newContactsList,
      }
    })
  }
 
  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
     [name]:value,
   })
}
 
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(lowercaseFilter)
    ))
    }
  
  isContactinList = (newName) => {
    const { contacts } = this.state;
    const lowercaseName = newName.toLowerCase();
    return contacts.find(({name})=>name.toLowerCase()===lowercaseName )
  }
  
  deleteContact = id => {
   
    this.setState(prevstate => ({
      contacts:prevstate.contacts.filter(contact=> contact.id !==id)
    }))
}

  render(){
    const filteredContacts = this.getFilteredContacts();
     
    return (
      <div style={{padding:'10px' }}>
        <h1>Phonebook</h1>
        <ContactForm handleFormChange={this.handleFormChange} />
        <Filter handleFilterChange={this.handleFilterChange}
          filter={this.state.filter} />
        <h2>Contacts</h2>
        <ContactsList contactlist={filteredContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}