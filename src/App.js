import React, { Component } from 'react';

class App extends Component {
  render() {
    const dom = <h1>hi!</h1>
    return (
      <React.Fragment>
        { dom}
        <input type="text" onChange={() => { console.log('Hi Mista') }} />
      </React.Fragment>
    );
  }
}

export default App;
