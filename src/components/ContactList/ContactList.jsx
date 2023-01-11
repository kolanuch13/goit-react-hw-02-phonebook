import React from "react"
import PropTypes from 'prop-types';

const ContactList = ({list, deleteContact}) => (
    <ul>
        { list.map(contact => {
            let markup = <li key={contact.id}>
                <span>{contact.name}: {contact.number}</span>
                <button type="button" onClick={deleteContact} id={contact.id}>Delete</button>
            </li>
            return markup;
            })
        }
    </ul>
)

ContactList.propTypes = {
    list: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;
