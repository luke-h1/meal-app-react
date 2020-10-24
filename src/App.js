import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
