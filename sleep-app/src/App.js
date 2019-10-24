import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import SleepTracking from './components/SleepTracking';
import SleepRating from './components/SleepRating';
import SleepResults from './components/SleepResults';

import Graph from "./components/Graph";
import ButtonPage from "./components/ButtonPage";



import PrivateRoute from './utils/PrivateRoute';
import SlideOut from './components/SlideOut';
import Alarms from './components/Alarms';

function App() {
  return (
<<<<<<< HEAD
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
=======
  

    <div>
      {/* <Signup />
      <LoginForm/> */}
      <Graph />
      <ButtonPage />
    </div>
  

>>>>>>> f51e045801343a23cb873fc5177f4cda46e6d9fa
  );
}

export default App;
