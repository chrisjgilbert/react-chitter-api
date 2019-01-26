import React, { Component } from 'react';

export class Peep extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.peep.body } posted by { this.props.peep.user.handle }</h1>
      </div>
    )
  }
}

export default Peep
