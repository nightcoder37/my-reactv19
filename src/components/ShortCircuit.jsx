import {useState} from 'react';
import './Hooks.css';

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState(null);
    return (
        <section className="container short-container">
            <h1>Welcome to the ShortCircuit Evaluation!</h1>

            {isLoggedIn && <p>You are logged in!</p>}

            {user ? `Hello ${user}` : 'Plz Log In'}

            <div className="grid-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    Toggle Login State
                </button>
                <button onClick={() => setUser('Ali')}>Set User</button>
                <button onClick={() => setUser('')}>Clear User</button>
            </div>
        </section>
    );
};

export default ShortCircuit;
