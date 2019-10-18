import React from 'react'

class TimerInput extends React.Component{
    render(){
        return(
            <div>
                <h3>Input desired time</h3>
                <input type="number" required />
            </div>
        );
    }
}
class Timer extends React.Component {
    render(){
        return(
            <div>
                <h1>  </h1>
            </div>
        );
    }
}

class StartButton extends React.Component {
    render(){
        return(
            <div>
                <button>Start</button>
            </div>
        );
    }
}

class TimerClock extends React.Component {
    render(){
        return(
            <div>
                <TimerInput/>
                <Timer />
                <StartButton/>
            </div>
        );
    }
}

export default TimerClock;