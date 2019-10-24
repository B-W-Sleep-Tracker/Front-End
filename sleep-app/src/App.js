import React from 'react';
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
  

    <div>
      {/* <Signup />
      <LoginForm/> */}
      <Graph />
      <ButtonPage />
    </div>
  

  );
}

export default App;
