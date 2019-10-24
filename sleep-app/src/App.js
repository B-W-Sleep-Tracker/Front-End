import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup';
import SleepTracking from './components/SleepTracking';
import SleepRating from './components/SleepRating';
import SleepResults from './components/SleepResults';
import Graph from "./components/Graph";
import ButtonPage from "./components/ButtonPage";


import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    // <Router>
    <div>
    <Login />
    </div>
    // <Signup />
    // <SleepTracking />
    // <SleepRating />
    // <SleepResults />

    // <div className="App">
      /* <Route exact path="/" component={Login} /> */
      /* <PrivateRoute path="/graph" component={Graph} /> */
      /* <Graph />
      <ButtonPage/> */
    // </div>


    // {/* </Router> */}
  );
}

export default App;
