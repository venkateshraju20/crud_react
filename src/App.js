import React, { Component } from 'react';
import './App.css';

import AppRoutes from './utils/AppRoutes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRoutes />
      </div>
    );
  }
}

export default App;
