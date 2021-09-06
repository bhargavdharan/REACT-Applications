import React, { useState } from 'react';

const useStateCounter = () => {
    const [value, setValue] = useState(0);
    const increaseValue = () => {
        setValue(value + 1);
    }
    const resetValue = () => {
        setValue(0);
    }
    const decreaseValue = () => {
        setValue(value - 1);
    }
    return (
        <React.Fragment>
            <h2>useState counter example</h2>
            <section style={{ margin: '4rem 0' }}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={increaseValue}>increase</button>
                <button className='btn' onClick={resetValue}>reset</button>
                <button className='btn' onClick={decreaseValue}>decrease</button>
            </section>
        </React.Fragment>
    )
}

export default useStateCounter;
