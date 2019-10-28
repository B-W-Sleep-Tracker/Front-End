import React, { Fragment, useState } from "react";
import { MDBBtn } from "mdbreact";
import GoodRating from "../img/Graph Emojis/4 Rating.png";
import AverageRating from "../img/Graph Emojis/3 Rating.png";
import MehRating from "../img/Graph Emojis/2 Rating.png";
import BadRating from "../img/Graph Emojis/1 Rating.png";

// const [ editing, setEditing] = useState(false);
// const [ dayToEdit, setDayToEdit] = useState();
// const [ scaleValue, setScaleValue] = useState();

// const editDate = day => {
//   setEditing(true);
//   setDayToEdit(day);
// };

// const saveEdit = e => {
//   e.preventDefault();
// }



const ButtonPage = (props) => {
const getRating= e => {
  props.updateHours(e.target.alt, e.target.id)
// if(e.target.id === "Sun" ){
//  console.log(e.target.alt)
//   if(e.target.alt === "good rating"){
//     console.log(props.graphData)
//     props.graphData[0].hours=8;
//   }
//   else if (e.target.alt === "average rating") {
//     props.graphData[0].hours=6;
//   }
//   else if (e.target.alt === "meh rating") {
//     props.graphData[0].hours=4;
//   }
//   else if (e.target.alt === "bad rating") {
//     props.graphData[0].hours=1;
//   }

// }
}


  return (
      <div className="all-btns">
        <div className="btn-text-top"> Sun </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Sunday" /></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating"id="Sunday" /></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Sunday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Sunday"/></button>
         
        <div className="btn-text-top"> Mon </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Monday"/></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Monday"/></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Monday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Monday"/></button>

        <div className="btn-text-top"> Tues </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Tuesday"/></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Tuesday"/></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Tuesday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Tuesday"/></button>

        <div className="btn-text-top"> Weds </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Wednesday" /></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Wednesday" /></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Wednesday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Wednesday"/></button>

        <div className="btn-text-top"> Thurs </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Thursday" /></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Thursday" /></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Thursday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Thursday"/></button>

        <div className="btn-text-top"> Fri </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Friday" /></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Friday"/></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Friday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Friday"/></button>

        <div className="btn-text-top"> Sat </div>
          <button onClick={getRating}><img src={GoodRating} alt="good rating" id="Saturday"/></button>
          <button onClick={getRating}><img src={AverageRating} alt="average rating" id="Saturday" /></button>
          <button onClick={getRating}><img src={MehRating} alt="meh rating" id="Saturday"/></button>
          <button onClick={getRating}><img src={BadRating} alt="bad rating" id="Saturday" /></button>

        </div>
    
  );
}

export default ButtonPage;