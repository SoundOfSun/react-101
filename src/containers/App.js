import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;

    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is it working?'));
  }
}

export default App;


