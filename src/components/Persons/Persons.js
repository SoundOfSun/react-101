import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    // Inside here, can access props.XY
    // call super to overwrite React default constructor
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    // Immutable approach of udpating persons array
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render () {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map( (person, index) => {
      return <Person
        click={ () => this.props.clicked(index)}
        name={person.name}
        key={person.id}
        age={person.age}
        changed={ (event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;
