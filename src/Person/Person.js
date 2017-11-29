import React from 'react';

{/* Create a component the ES6 way */}

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;
