import React from 'react';
import './App.css';
import AppProvider  from './store/AppProvider';
import List from './component/list/list';
import Nav from './component/nav/nav';
import Add from './component/add/add';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <AppProvider>
        <Router>
        <Nav />
        <Route exact path='/' component={List} />
        <Route exact path='/add' component={Add} />
        </Router>
      </AppProvider>
  );
}

export default App;
