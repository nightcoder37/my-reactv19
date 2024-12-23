import {useState} from 'react';
import '../../Hooks.css';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [inputvalue, setInputValue] = useState(0);
    function handleCount() {
        setCount((prevCount) => {
            const newCount = prevCount + inputvalue;
            if (newCount >= 100) return prevCount;
            return newCount;
        });
        // console.log('inner:', count);
    }
    console.log('outer:', count);

    function handleCountReverse() {
        setCount(count - inputvalue);
    }

    function handleCountReset() {
        setCount(0);
    }
    return (
        <div
            className="container state-container"
            style={{
                textAlign: 'center'
            }}>
            <h1>useState Hook!</h1>
            <br />
            <p className="inline-block	">Count: {count}</p>
            <br />
            <input
                className="border-2 p-2 mr-4"
                type="text"
                placeholder="Value"
                value={inputvalue}
                onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <br />
            <button
                className="p-2 mt-4 "
                onClick={handleCount}
                disabled={count >= 100}>
                Increment
            </button>

            <button
                className="p-2 ml-2"
                onClick={handleCountReverse}
                disabled={count <= 0}>
                Decrement
            </button>
            <button className="p-2 ml-2" onClick={handleCountReset}>
                Reset
            </button>
        </div>
    );
};
