import {useEffect, useState} from 'react';
import './index.css';

export const ReactUseEffect = () => {
    // const [count, setCount] = useState(0);
    const [date, setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <div className="container effect-container">
            <h1>Date: {date}</h1>
            {/* <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
        </div>
    );
};
