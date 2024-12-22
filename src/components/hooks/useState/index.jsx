import {useState} from 'react';
import '../../Hooks.css';

export const Counter = () => {
    const [count, setCount] = useState(0);
    function handleCount() {
        setCount(count + 1);
    }
    function handleCountReverse() {
        if (count <= 0) return; // Do not decrease below 0
        setCount(count - 1);
    }

    return (
        <div
            className="container state-container"
            style={{
                textAlign: 'center'
            }}>
            <h1>useState Hook!</h1>
            <br />
            <p>Count: {count}</p>
            <button className="p-2 " onClick={handleCount}>
                +
            </button>
            <button className="p-2 ml-2" onClick={handleCountReverse}>
                -
            </button>
        </div>
    );
};
