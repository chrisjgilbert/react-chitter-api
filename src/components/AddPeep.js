import React, { Component } from 'react';
import axios from 'axios';

export class AddPeep extends Component {

  state = {
    body: "",
  }

  handleChange = (event) => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const peep = {
      "user_id" : 748,
      body: this.state.body
    }

    axios({
      method: 'post',
      url: 'https://chitter-backend-api.herokuapp.com/peeps',
      data: peep,
      config: { headers: {"Content-Type": "application/json", "Authorization": "Token token=999" }}
    })
    .then(function (response) {
      console.log(response);
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Peep"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="submit"
        />
      </form>
    )
  }
}

export default AddPeep;
