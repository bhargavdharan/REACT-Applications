import React, { useState } from 'react';
// ---General Rules of Hook---
// components name must be upperCase
// must be in the function/component body
// cannot call conditionally

//useState - function


const UseStateBasics = () => {
    // console.log(useState("hello world"));
    // const value = useState(1)[0]
    // const handler = useState(1)[1]
    // console.log(value,handler)
    const [text, setText] = useState('random title');
    
    const handleClick = () => {
        if (text === 'random title') {
            setText('Hello World!');
        } else {
            setText('random title');
        }
    };
    return (
        <React.Fragment>
            <h2>useState basic example.</h2>
            <h2>{text}</h2>
            <button className="btn" onClick={handleClick}>change title</button>

        </React.Fragment>
    )
}

export default UseStateBasics;