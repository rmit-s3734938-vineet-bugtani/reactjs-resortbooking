import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Rooms from './views/Rooms';
import SingleRoom from './views/SingleRoom';
import Error from './views/Error';
import { Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return <>
  <Navbar/>
  <Switch>
  <Route exact path="/" component={ Home }></Route>
  <Route exact path="/rooms/" component={ Rooms }></Route>
  <Route exact path="/rooms/:id" component={ SingleRoom }></Route>
  <Route component={ Error }></Route>
  </Switch>
  </>;
}

export default App;
