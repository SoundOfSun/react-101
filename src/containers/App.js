import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    // Inside here, can access props.XY
    // call super to overwrite React default constructor
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Cecile', age: 25 },
        { id: '2', name: 'Jeanne', age: 28 },
        { id: '3', name: 'Leon', age: 24 }
      ],
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // Immutable approach of udpating persons array
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // State is only available in components which extend
  // state = {
  //   persons: [
  //     { id: '1', name: 'Cecile', age: 25 },
  //     { id: '2', name: 'Jeanne', age: 28 },
  //     { id: '3', name: 'Leon', age: 24 }
  //   ],

  //   showPersons: false
  // }

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
    // to avoid using this.state in setState, use :
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] Inside render')

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;

    }

    return (
      <Aux>
        <button onClick={ () => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is it working?'));
  }
}

export default withClass(App, classes.App);


