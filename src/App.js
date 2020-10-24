import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch></Switch>
        <Search />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
