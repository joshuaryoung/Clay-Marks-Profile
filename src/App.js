import React, { Component } from 'react';

import Home from './components/Home';
import Screen from './components/Screen';
import Page from './components/Page';
import Stage from './components/Stage';
import LGD from './components/LGD';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component
{
  render() {
    return (
      <Router>
        <Route render={({ location }) => (

            <div className="background-color">
              <NavBar />
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="active-animation" timeout={700}>
                  <Switch location={location}>
                    <Route exact path="/" render={() => (
                        <Redirect to="/Home"/>
                    )}/>
                    <Route path="/Home" component={Home} />
                    <Route path="/Screen" component={Screen} />
                    <Route path="/Page" component={Page} />
                    <Route path="/Stage" component={Stage} />
                    <Route path="/LGD" component={LGD} />
                    <Route path="/Contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>

        )} />

      </Router>
    );
  }
}

export default App;
