import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    });
    // console.log(person);
    const [name, setName] = useState('peter');
    const [age, setAge] = useState(25);
    const [message, setMessage] = useState('random message');
    
    const changeMsg = () => {
        // when we update new msg it wipes out remaining objects
        // solution is "Spread operator"
        setPerson({ ...person, message: 'Hello, world!' });

        setName("Danny");
        setAge(20);
        setMessage('Hello,World!');
    }
    return (
        <React.Fragment>
            <h2>useState object example</h2>
            <h3>{person.name }</h3>
            <h3>{person.age }</h3>
            <h3>{person.message}</h3>
            <h3>-----------------</h3>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMsg}>
                change message
            </button>
        </React.Fragment>
    )
  
}

export default UseStateObject;