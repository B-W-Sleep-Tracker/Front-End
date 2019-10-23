

import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Sunday', SleepTracker: "8", hours: "0", 
  },
  {
    name: 'Monday', SleepTracker: "8", hours: "0",
  },
  {
    name: 'Tuesday', SleepTracker: "8", hours: "0",
  },
  {
    name: 'Wednesday', SleepTracker: "8", hours: "0",
  },
  {
    name: 'Thursday', SleepTracker: "8", hours: "0",
  },
  {
    name: 'Friday', SleepTracker: "8", hours: "0",
  },
  {
    name: 'Saturday', SleepTracker: "8", hours: "0",
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={730}
        height={350}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* hours above equals the y-axis */}
        <YAxis dataKey="hours"/>
        {/* <Tooltip />
        <Legend /> */}
        <Bar dataKey="hours" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}

