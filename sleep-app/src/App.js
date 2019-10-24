import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import SleepTracking from './components/SleepTracking';
import SleepRating from './components/SleepRating';
import SleepResults from './components/SleepResults';
import Graph from './components/Graph';
import PrivateRoute from './utils/PrivateRoute';
import SlideOut from './components/SlideOut';
import Alarms from './components/Alarms';

function App() {
  return (
    // <Router>
    // <LoginForm />
    // <Signup />
    // <SleepTracking />
    // <SleepRating />
    // <SleepResults />
    // <SlideOut />
    <main>
      <Route exact path="/LoginForm" component={LoginForm} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/SleepTracking" component={SleepTracking} />
      <Route exact path="/SleepRating" component={SleepRating} />
      <Route exact path="/SleepResults" component={SleepResults} />
      <Route exact path="/SlideOut" component={SlideOut} />
      <Route exact path="/" component={Alarms} />
    </main>
  );
}

export default App;
