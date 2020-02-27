import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Search from './components/Search'

import './App.css';

function App() {
  return (
    <div className="App container">
      <Jumbotron>
        <h1 className="lead text-center font-weight-bold mb-3">Google Search Book App</h1>
          <Search />
        </Jumbotron>
     
    </div>
  );
}

export default App;
