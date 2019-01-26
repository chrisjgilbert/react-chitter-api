import React, { Component } from 'react';
import Peeps from './components/Peeps'
import './App.css';

class App extends Component {
  state = {
    peeps: [
      {
          "id": 3,
          "body": "my first peep :)",
          "created_at": "2018-06-23T13:21:23.317Z",
          "updated_at": "2018-06-23T13:21:23.317Z",
          "user": {
            "id": 1,
            "handle": "kay"
          },
          "likes": [{
            "user": {
              "id": 1,
              "handle": "kay"
            }
          }]
        },
        {
            "id": 4,
            "body": "my second peep :)",
            "created_at": "2018-06-23T13:21:23.317Z",
            "updated_at": "2018-06-23T13:21:23.317Z",
            "user": {
              "id": 2,
              "handle": "bill"
            },
            "likes": [{
              "user": {
                "id": 2,
                "handle": "bill"
              }
            }]
          }
    ]
  }
  render() {
    return (
      <div className="App">
        <Peeps peeps={this.state.peeps}/>
      </div>
    );
  }
}

export default App;
