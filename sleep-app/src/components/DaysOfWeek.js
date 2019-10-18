import _ from 'lodash'
import React from 'react'
import { Grid } from 'semantic-ui-react'
const colors = [
 'violet',
 'blue',
]

// function DaysOfWeek() {
//   return(
//  <Grid columns={7} padded>
//    {colors.map((color) => (
//      <Grid.Column color={color} key={color}>
//        {_.capitalize(color)}
//      </Grid.Column>
//    ))}
//  </Grid>
//   );
// }
// export default DaysOfWeek;

import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const DaysofWeek = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get("colors")
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;