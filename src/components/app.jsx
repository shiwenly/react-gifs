import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return(
      <div>
        <div className="left-scene"></div>
          <div className="form-search"></div>
        <div className="right-scene"></div>
          <div className="selected-gif"></div>
      </div>
    );
  }
}

export default App;
