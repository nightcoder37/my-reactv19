import React, {useState} from 'react';
import './index.css';

const LoginForm = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserLogin((prevData) => ({...prevData, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        };
        console.log(loginData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    value={userLogin.email}
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
                    value={userLogin.password}
                    onChange={handleInputChange}
                />
                <div className="clearfix">
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </div>
            </form>
            <section
                className="summary"
                style={{textAlign: 'center', marginTop: '30px'}}>
                <p>
                    Hello . My Email address is <span>{userLogin.email}</span>
                </p>
            </section>
        </div>
    );
};

export default LoginForm;
