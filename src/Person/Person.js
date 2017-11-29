import React from 'react';

{/* Create a component the ES6 way */}

const person = (props) => {
  return <p>I'm {props.name} and I am {props.age} years old!</p>
}

export default person;
