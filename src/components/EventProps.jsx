import React from 'react';
import './EV.css';

export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`);
    };

    const handleHover = () => {
        alert('Thanks for hover');
    };
    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser('Ali')}
                onMouseEnter={handleHover}
            />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        props.onClick();
    };
    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};
