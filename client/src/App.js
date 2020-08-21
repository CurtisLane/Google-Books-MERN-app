import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './pages/search/Search';
import Saved from './pages/saved/Saved'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
