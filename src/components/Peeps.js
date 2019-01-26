import React, { Component } from 'react';

class Peeps extends Component {
  render() {
    return this.props.peeps.map((peep) => (
      <h3>{peep.body}</h3>
    ));
  }
}

export default Peeps;
