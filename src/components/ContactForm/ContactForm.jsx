import { Component } from "react";
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            number: "",
        }
    }
    
    loginInputId = nanoid();
  
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        // this.setState({ id: this.loginInputId });
        this.setState({ [name]: value });
    };

    reset() {
        this.setState  ({
            name: "",
            number: "",
        })
    }

    render() {
        const { name, number } = this.state;

        return <div>
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor={this.loginInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        id={this.loginInputId}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        required
                    />
                </label>
                <label htmlFor={this.loginInputId}>
                    Number
                    <input
                        type="text"
                        name="number"
                        id={this.loginInputId}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        </div>  

    }
}

export default ContactForm;
