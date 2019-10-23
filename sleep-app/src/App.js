import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import SleepTracking from './components/SleepTracking';
import SleepRating from './components/SleepRating';
import SleepResults from './components/SleepResults';
import Graph from './components/Graph';
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    // <Router>
    // <LoginForm />
    // <Signup />
    // <SleepTracking />
    <SleepRating />
    // <SleepResults />
  );
}

export default App;
