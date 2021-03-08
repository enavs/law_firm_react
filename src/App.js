import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navfooter from './components/Navfooter';
import Contact from './views/Contact';
import Who from './views/Who';
import News from './views/News';
import What from './views/What';
import Where from './views/Where';

export default class App extends Component {
  // constructor() {
    // super();
  // }

  render() {
    return (
      <div className="background-pic">
        <div className="container small-background-pic">
          <header>
            <Navbar /> 
          </header>
          
          <main className=''>
            <Switch>
              <Route path='/who' render={() => <Who /> } />
              <Route path='/what' render={() => <What /> } />
              <Route path='/news' render={() => <News /> } />
              <Route path='/where' render={() => <Where /> } />
              <Route path='/contact' render={() => <Contact /> } />
            </Switch>
          </main>
    
          <footer>
            <Navfooter /> 
          </footer>
        </div>
      </div>
      )
    }
  }
  




