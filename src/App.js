import React, { Component } from 'react';
import Peeps from './components/Peeps'
import AddPeep from './components/AddPeep'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    peeps: []
  }

  componentDidMount() {
    axios.get("https://chitter-backend-api.herokuapp.com/peeps")
      .then(res => this.setState({ peeps: res.data }))
  }

  render() {
    return (
      <div className="App">
        <AddPeep />
        <Peeps peeps={this.state.peeps}/>
      </div>
    );
  }
}

export default App;
