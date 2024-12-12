import './EV.css';

export const EventHandling = () => {
    // function handleButtonClick(event) {
    //     console.log(event);
    //     alert('Hey I am onClick Event');
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        alert('Hey I am onClick Event');
    };

    return (
        <>
            {/* //? Function Components with Named Function */}
            <button onClick={handleButtonClick}>Click Me</button>
            <br />
            <br />
            <button onClick={(event) => handleButtonClick(event)}>
                Click Me 2
            </button>
            <br />
            <br />
            <button onClick={(event) => console.log(event, event.target)}>
                Inline Event
            </button>
            <br />
            <br />
            <button onClick={() => alert('Hey I am inline event function')}>
                Inline Arr fun
            </button>
        </>
    );
};
