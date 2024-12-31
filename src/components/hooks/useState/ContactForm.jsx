import React, {useState} from 'react';
import './index.css';

const ContactForm = () => {
    // const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const [contact, setContact] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContact((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // const contactData = {
        //     username,
        //     email,
        //     message
        // };

        console.log(contact);
    };

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    required
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    autoCapitalize="off"
                    rows="6"
                    value={contact.message}
                    onChange={handleInputChange}
                />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
