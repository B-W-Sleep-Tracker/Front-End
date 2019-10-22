import React from 'react'

export default function TimerInOut(){
    const FireEvent = () =>{
        console.log("TODO: Make this data go somewhere");
    }
    return(
        <div>
            <h1 >Time you went to bed!</h1>
            <input type='time' />
            <h1 >Time You woke up!</h1>
            <input type='time' />
            <br/>
            <button onSubmit={ FireEvent() } >Submit</button>
        </div>

    )
    
}
