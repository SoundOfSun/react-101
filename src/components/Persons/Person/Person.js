import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  constructor(props) {
    // Inside here, can access props.XY
    // call super to overwrite React default constructor
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render () {
    console.log('[Person.js] Inside render()');

    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text"
          ref={ (inp) => { this.inputElement = inp } }
          onChange={this.props.changed}
          defaultValue={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  // key-value pairs props: rules,
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
