import React, { useState, PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import axiosWithAuth from "../utils/axioswithAuth";

const initialTime = [
  {
    name: 'Sunday', SleepTracker: "", hours: "5",

  },
  {
    name: 'Monday', SleepTracker: "",
  },
  {
    name: 'Tuesday', SleepTracker: "",
  },
  {
    name: 'Wednesday', SleepTracker: "",
  },
  {
    name: 'Thursday', SleepTracker: "",
  },
  {
    name: 'Friday', SleepTracker: "",
  },
  {
    name: 'Saturday', SleepTracker: "",
  },
];

const TimesChart = ({ times, updateTimes }) => {
  const [edit, setEditing] = useState(false);
  const [timeToEdit, setTimeToEdit] = useState(initialTime);
  const [addTime, setAddTime] = useState(initialTime);

  const editTime = time => {
    setEditing(true);
    setTimeToEdit(time);
  };

  const renewTime = () => {
    axiosWithAuth()
      .get("times")
      .then(res => {
        updateTimes(res.data);
      })
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is it saved right now?

    axiosWithAuth()
      .put(`/${timeToEdit.id}`, timeToEdit)
      .then(res => {
        const newTimes = times.map(cv => {
          if (cv.id == timeToEdit.id) {
            return timeToEdit;
          } else {
            return cv;
          }
        });

        updateTimes(newTimes);
        setEditing(false);

        setTimeToEdit({ initialTime });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  const deleteTime = time => {
    // make a delete request to delete this time
    axiosWithAuth()
      .delete(`/${time.id}`)
      .then(res => {
        setTimeToEdit(initialTime);
        setEditing(false);
        renewTime();
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  const handleAddTime = e => {
    e.preventDefault();
    const newTime = {
      ...addTime,
      id: Date.now()
    };
    axiosWithAuth()
      .post("time", newTime)
      .then(res => {
        setAddTime(initialTime);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };


}

class Chart extends PureComponent {
  constructor(props){
    super(props);
    this.data = props.data;
    this.times = props.times;
  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
  return (
    <div>
      <ComposedChart
        width={700}
        height={400}
        data={this.data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="hours" />
        <Tooltip />
        <Legend />
        <Bar dataKey="SleepTracker" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="Fluency" stroke="#ff7300" />
      </ComposedChart>
      <div className="time-wrap">
        <p>Track your Sleep!</p>
        <ul>
          {this.times.map(time => (
            <li key={time.time} onClick={() => editTime(time)}>
              <span>
                <span className="delete" onClick={() => deleteTime(time)}>
                  x
              </span>{" "}
                {time.time}
              </span>
              <div
                className="time-box"
                style={{ backgroundColor: color.code.hex }}
              />
            </li>
          ))}
        </ul>
        {edit && (
          <form onSubmit={saveEdit}>
            <legend>Edit Sleep Schedule</legend>
            <label>
              Date:
            <input
                onChange={e =>
                  setTimeToEdit({ ...timeToEdit, time: e.target.value })
                }
                value={timeToEdit.time}
              />
            </label>
            <label>
              How many hours?
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
        <div className="spacer" />
        //Build another form here to add a new time 
        <h1>Add a new time!</h1>
        <form onSubmit={handleAddTime}>
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            name="date"
            value={addTime.time}
            onChange={e => setAddTime({ ...addTime, time: e.target.value })}
          />
          <label htmlFor="code">Hours:</label>
          <input
            type="text"
            name="code"
            value={addTime.code.time}
            onChange={e =>
              setAddTime({ ...addTime, code: { ...addTime, time: e.target.value } })
            }
          />
          <button type="submit">Add New Time!</button>
        </form>
      </div>
      </div>
    );

  }
}

function Graph(){
  return(
    <div>
      <TimesChart/>
      <Chart/>
    </div>
  );
}
export default Graph;
