import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import Case from './components/Case'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [state, setState] = useState(0)

  useEffect(() => 
    fetch('http://localhost:8000/').then(data => {
      console.log(data)
      setState({
        data: data
      })
    }), []
  )

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/home' component={List} />
          <Route exact path='/:id' component={Case} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
