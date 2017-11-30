import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // The key is always on the outer element in a map method
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              key={person.id}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;

    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red'];
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app!</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle List</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is it working?'));
  }
}

export default App;


