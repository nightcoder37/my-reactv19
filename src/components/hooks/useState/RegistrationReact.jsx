import {useState} from 'react';
import './index.css';

export const RegistrationFormReact = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prevData) => ({...prevData, [name]: value}));

        // setFirstName(e.target.value);
        // setLastName(e.target.value);
        // setEmail(e.target.value);
        // setPassword(e.target.value);
        // setPhoneNumber(e.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        };
        console.log(formData);
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="">
                    <h1>Sign Up</h1>
                    <p>please fill in this form to create an account.</p>
                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input
                        type="phone"
                        name="phoneNumber"
                        placeholder="92313132546"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{color: 'dodgerblue'}}>
                            Terms & Privacy
                        </a>
                        .
                    </p>
                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <section
                className="summary"
                style={{textAlign: 'center', marginTop: '30px'}}>
                <p>
                    Hello, My name is
                    <span>
                        {user.firstName}
                        {user.lastName}
                    </span>
                    . My Email address is <span>{user.email}</span> and phone
                    number is
                    <span>{user.phoneNumber}</span>.
                </p>
            </section>
        </>
    );
};
