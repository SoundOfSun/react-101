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
    ],

    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    // set the state of persons to the updates persons above
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px 15px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle List</button>
        {persons}
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
