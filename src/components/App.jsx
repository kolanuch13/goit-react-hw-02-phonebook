import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: "id-1",
          name: "Harry Potter",
          number: "+11111111"
        },
        {
          id: "id-2",
          name: "Ron Weasley",
          number: "+2222222"
        },
        {
          id: "id-3",
          name: "Hermione Ganger",
          number: "+333333"
        },
        {
          id: "id-4",
          name: "Albus Dumbledore",
          number: "+4444444"
        }
      ],
      filter: "",
    }
  }
  
  formSubmitHandler = data => {
    data.id = nanoid();
    let current = this.state.contacts;

    const myContacts = current.filter(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (myContacts.length) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  }

  changeFilter = evt => {
    this.setState({filter: evt.target.value});
  }

  deleteContact = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== evt.target.id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.includes(this.state.filter))

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: "column"
        }}
      >
        <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
        <ContactList list={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
};

export default App;