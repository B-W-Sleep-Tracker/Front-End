import React from 'react'

export default function TimerInOut(){
    const FireEvent = () =>{
        console.log("TODO: Make this data go somewhere");
    }
    return(
        <div>
            <h1 style={{ marginLeft: 130 }}>Time you went to bed!</h1>
            <input type='time' style={{ marginLeft: 160 }}/>
            <h1 style={{ marginLeft: 130 }}>Time You woke up!</h1>
            <input type='time' style={{ marginLeft: 160 }}/>
            <button onClick={FireEvent()}>Submit</button>
        </div>

    )
    
}