import React from 'react';
import {useState} from 'react';

const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // };

    const [value, setValue] = useState(0);
    console.log('Parent Component rendered');
    const handleButtonClick = () => {
        setValue(() => value + 1);
    };

    return (
        <>
            <section className="main-div">
                <h1>{value}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </section>
            <ChildComponent value={value} />
        </>
    );
};

export default State;

function ChildComponent({value}) {
    console.log('Child Component rendered');
    return (
        <div>
            <h2>Child Component - {value}</h2>
        </div>
    );
}

// export function SiblingComponent() {
//     console.log('Sibling Component rendered');
//     return (
//         <div>
//             <h2>Sibling Component</h2>
//         </div>
//     );
// }
