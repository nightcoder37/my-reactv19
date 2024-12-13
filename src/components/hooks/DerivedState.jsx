import {useState} from 'react';
import '../EV.css';

// const users = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 28},
//     {name: 'David', age: 27}
// ];
const DerivedState = () => {
    const [users, setUsers] = useState([
        {name: 'Alice', age: 25},
        {name: 'Bob', age: 30},
        {name: 'Charlie', age: 35},
        {name: 'David', age: 27}
    ]);
    // console.log(users);
    const userCount = users.length;

    const averageAge =
        users.reduce((acc, curElem) => acc + curElem.age, 0) / userCount;

    return (
        <>
            <div className="main-div">
                <h1>Users List </h1>
                <ul>
                    {users.map((curElem, index) => {
                        return (
                            <li key={index}>
                                {curElem.name} - {curElem.age} year old
                            </li>
                        );
                    })}
                </ul>
                <p>Total Users:{userCount}</p>
                <p>Average Age: {averageAge}</p>
            </div>
        </>
    );
};

export default DerivedState;
