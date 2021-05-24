import React from 'react';
import './Person.css';
import Radium from 'radium'
const person = (prop) => {
    return (
        <div className="Person">
        <p onClick={prop.click}>i am {prop.name} and i am {prop.age} years </p>
        <p onClick={prop.click}> {prop.children}</p>
        <input type="text" onChange={prop.changed} />
        </div>
    )

};
export default Radium(person);