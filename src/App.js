import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import Case from './components/Case'
import NewCase from './components/NewCase'
import EditCase from './components/EditCase';
import ConfirmDelete from './components/ConfirmDelete';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [decision, setDecision] = useState('')
  const [keywords, setKeywords] = useState([])
  const [list, setList] = useState([])

  return (
    <Router>
      <div className="App">
        <Nav user='John'/>
        <Switch>
          <Route exact path='/home' component={List} />
          <Route exact path='/new' component={NewCase} />
          <Route exact path='/:id' component={Case} />
          <Route exact path='/edit/:id' component={EditCase} />
          <Route exact path='/delete/:id' component={ConfirmDelete} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;