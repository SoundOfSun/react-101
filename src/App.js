import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State is only available in components which extend
  state = {
    persons: [
      { name: 'Cecile', age: 25 },
      { name: 'Jeanne', age: 28 },
      { name: 'Leon', age: 24 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState( {
      persons: [
      { name: newName, age: 25 },
      { name: 'Jeanne', age: 28 },
      { name: 'Leonard', age: 23 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
      { name: 'Cecile', age: 25 },
      { name: event.target.value, age: 28 },
      { name: 'Leonard', age: 23 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px 15px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Cecilia!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Cecilia')} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My hobbies: Painting.</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is it working?'));
  }
}

export default App;

{/* This is a comment on a JS / JSX file
  For each .js file, go to
  view > syntax > open all > babel > JS (react)
*/}
