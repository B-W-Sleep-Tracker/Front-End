import React, { useState, PureComponent } from 'react';
import {
  BarChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
// import axiosWithAuth from "../utils/axioswithAuth";
import PrivateRoute from '../utils/PrivateRoute';

const initialTime = [
  {
    day: 'Sunday', SleepTracker: "8", hours: "0",
    
  },
  {
    day: 'Monday', SleepTracker: "8", hours: "0",
  },
  {
    day:  'Tuesday', SleepTracker: "8", hours: "0",
  },
  {
    day:  'Wednesday', SleepTracker: "8", hours: "0",
  },
  {
    day:  'Thursday', SleepTracker: "8", hours: "0",
  },
  {
    day:  'Friday', SleepTracker: "8", hours: "0",
  },
  {
    day:  'Saturday', SleepTracker: "8", hours: "0",
  },
];

const TimesChart = ({ times, updateTimes}) => {
  const [editing, setEditing] = useState (false);
  const [timeToEdit, setTimeToEdit] = useState ({});
  const[addTime,setAddTime] = useState({});
  const[time, setTime] = useState(initialTime);
  const [updatedTime, setUpdatedTime] = useState ({});

  const editTime = time => {
    console.log("test");
    setEditing(true);
    setTimeToEdit(time);
  };

  // const renewTime = () => {
  //   axiosWithAuth()
  //   .get ("times")
  //   .then(res => {
  //     updateTimes(res.data);
  //   })
  //   .catch(err => {
  //     console.log("Error: ", err);
  //   });
  // };

  // const saveEdit = e => {
  //   e.preventDefault();
// Make a put request to save your updated color
    // think about where will you get the id from...
    // where is it saved right now?

  //   axiosWithAuth()
  //   .put(`sleep/${timeToEdit.id}`, timeToEdit)
  //   .then(res => {
  //     const newTimes = times.map(cv => {
  //       if (cv.id == timeToEdit.id) {
  //         return timeToEdit;
  //       } else {
  //         return cv;
  //       }
  //     });

  //     updateTimes(newTimes);
  //     setEditing (false);
      
  //     setTimeToEdit ({initialTime});
  //   })
  //   .catch(err => {
  //     console.log("Error: ", err);
  //   });
  // };

  // const deleteTime = time => {
    // make a delete request to delete the selected time
//     axiosWithAuth ()
//     .delete (`sleep/${time.id}`)
//     .then(res => {
// setTimeToEdit (initialTime);
// setEditing (false);
// renewTime();
//     })
//     .catch(err => {
//       console.log("Error: ", err);
//     });
//   };

const handleAddTime = e => {
  e.preventDefault();
  const newTime = {
    ...addTime,
    id: Date.now()
  };
  // axiosWithAuth()
  // .post ("time", newTime)
  // .then(res => {
  //   setAddTime(initialTime);
  // })
  // .catch(err => {
  //   console.log("Error: ", err);
  // });
};

const submitEditHandler = e => {
  e.preventDefault();
  setUpdatedTime (time.filter(timeObj => {
    // console.log(timeObj.day===timeToEdit.updateTimes);
return (
  timeObj.day===timeToEdit.updateTimes
)
  }
    ))

setTime(time.map(item => {
  console.log(item.day);
  console.log(updatedTime);
  if(item.day===updatedTime.updateTimes) {
    return(
      {...item, hours: updatedTime.time}
    )
  }
  else{
    return( item)
  }
}))

}

const timeHandler = e => {
// e.preventDefault();
editTime(timeToEdit)
}

return(
<>
<div className="sleep-wrap">
<h1>Track your Sleep!</h1>

<BarChart width={730} height={350} data={time}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis onClick={timeHandler} dataKey="day" />
  <YAxis dataKey="SleepTracker"/>
  <Bar dataKey="hours" barSize={40} fill="#413ea0"/>
 
</BarChart>

      {/* <span>
        <span className="delete" onClick={() => deleteTime(setTimeToEdit)}>
        </span>{" "}
        {setTimeToEdit.setTimeToEdit}
      </span> */}

 

{editing && (
 
  <form onSubmit={submitEditHandler}>
     <h1>Edit Sleep Schedule</h1>
    <label htmlFor="day">Day: </label>
      <input
      type="text"
      name="day"
      value={timeToEdit.day}
        onChange={e =>
          setTimeToEdit({ ...timeToEdit, updateTimes: e.target.value })
        }
        value={timeToEdit.updateTimes}
      />
    <label>
      Change hours to: 
      <input
        onChange={e =>
          setTimeToEdit({ ...timeToEdit, time: e.target.value })
        }
        value={timeToEdit.time}
      />
    </label>
    <div className="button-row">
      <button type="submit">Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  </form>
)}
 ))}

<div className="spacer" />


<h1>Add a new time!</h1>
<form onSubmit={handleAddTime}>
  <label htmlFor="day">Day: </label>
  <input
    type="text"
    name="day"
    value={addTime.day}
    onChange={e => setAddTime({ ...addTime, [e.target.name]: e.target.value })}
  />
  <label htmlFor="hours">Hours:</label>
  <input
    type="text"
    name="hours"
    value={addTime.hours}
    onChange={e =>
      setAddTime({ ...addTime, [e.target.name]: e.target.value })
    }
  />
  <button type="submit">Add New Time!</button>
</form>


</div>
</>


)
}

 export default TimesChart;
