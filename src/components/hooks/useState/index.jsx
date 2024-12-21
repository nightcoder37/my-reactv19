import React, {useState} from 'react';

const index = () => {
    const [count, setCount] = useState(0);
    const handlestate = () => {};
    setCount(count + 1);
    return (
        <>
            <div
                className="container state-container"
                style={{textAlign: 'center'}}>
                <h1>useState Hooks!</h1>
                <br />
                <p>Count: {count}</p>
                <button onClick={handlestate()}>+</button>
            </div>
        </>
    );
};

export default index;
