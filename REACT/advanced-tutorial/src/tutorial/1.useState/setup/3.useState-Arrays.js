import React from 'react';
// import  {useState} from 'react';
import { data } from '../../../data';

const UseStateArrays = () => {
    const [people, setPeople] = React.useState(data);
    
    const removeItem = (id) => {
        let newPeople = people.filter((person)=>person.id !== id)
        setPeople(newPeople)
    }
    const deleteAll = () => {
        setPeople([])
    }
    
    return (
        <React.Fragment>
            <h2>useState array example</h2>

            {people.map((person) => {
                // console.log(person);
                // return "Hello";
                const { id, name } = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}

            <button className="btn" onClick={deleteAll}>clear items</button>


        </React.Fragment>
    )
}

export default UseStateArrays;