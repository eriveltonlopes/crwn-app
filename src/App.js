import React from 'react';
import HomePage from './pages/homepage/homepage.component'

import {BrowserRouter, Switch, Route}  from 'react-router-dom'
import './App.css';

const HatsPahe = () => {
  return(
    <div>
    <h1>Hast</h1>
  </div>
  )
}
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hat' component={HatsPahe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
