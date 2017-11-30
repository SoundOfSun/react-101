import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State is only available in components which extend
  state = {
    persons: [
      { id: '1', name: 'Cecile', age: 25 },
      { id: '2', name: 'Jeanne', age: 28 },
      { id: '3', name: 'Leon', age: 24 }
    ],

    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // ALWAYS uptade state in an immutable fashion: not on original state itself
    // Good practice 1: use a copy of the array with .slice()
    // const persons = this.state.persons.slice();
    // Good practice 2: use ES6 spread operator ...
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // set the state of persons to the updates persons above
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // Find a single person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // immutable : create copy
    const person = {...this.state.persons[personIndex]};

    // change the name
    person.name = event.target.value;

    // modify array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update persons with the updated copy above
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
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
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
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
