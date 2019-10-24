import React from 'react';
import './App.css';
import { Route, path } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import SleepTracking from './components/SleepTracking';
import SleepRating from './components/SleepRating';
import SleepResults from './components/SleepResults';

import Graph from './components/Graph';
import ButtonPage from './components/ButtonPage';

import PrivateRoute from './utils/PrivateRoute';
import SlideOut from './components/SlideOut';
import Alarms from './components/Alarms';

function App() {
  return (
    <main>
      <Route  path ="/login" component={LoginForm} />
      <Route  path ="/sign-up" component={Signup}/>
      <Route  path ="/sleep-tracking" component={SleepTracking} />
      <Route path="/sleep-rating" component={SleepRating} />
      <Route path="/sleep-results" component={SleepResults}/>
      <Route path="/slide-out" component={SlideOut} />
      <Route path="/graph" component={Graph} />
      <Route exact path="/" component={Alarms} />
    </main>
  );
}

export default App;
