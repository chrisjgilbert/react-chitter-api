import React, { Component } from 'react';
import Peep from './Peep';

export class Peeps extends Component {
  render() {
    return this.props.peeps.map((peep) => (
      <Peep peep={peep} />
    ));
  }
}

export default Peeps;
