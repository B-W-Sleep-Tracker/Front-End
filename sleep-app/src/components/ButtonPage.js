// import React, { Fragment, useState } from "react";
// import { MDBBtn } from "mdbreact";
// import GoodRating from "../img/Graph Emojis/4 Rating.png";
// import AverageRating from "../img/Graph Emojis/3 Rating.png";
// import MehRating from "../img/Graph Emojis/2 Rating.png";
// import BadRating from "../img/Graph Emojis/1 Rating.png";

// const [ editing, setEditing] = useState(false);
// const [ dayToEdit, setDayToEdit] = useState();

// const editDate = day => {
//   setEditing(true);
//   setDayToEdit(day);
// };

// const saveEdit = e => {
//   e.preventDefault();
// }



// const ButtonPage = () => {
//   return (
//     <Fragment>
//       <MDBBtn rounded color="purple"> <div className="btn-text-top"> 27 </div><img src={GoodRating} alt="good rating" />
//       <div className="btn-text-btm">
//         Sun</div></MDBBtn>
// {editing && (
//   <form onSubmit={saveEdit}>
//     <legend>Edit Sleep:</legend>
//     <label>
//       Day:
//       <input
//         onChange={e =>
//           setDayToEdit({ ...dayToEdit, day: e.target.value })
//         }
//         value={dayToEdit.day}
//       />
//     </label>
//     <label>
//       Hours:
//       <input
//         onChange={e =>
//           setDayToEdit({ ...dayToEdit, day: e.target.value })
//         }
//         value={dayToEdit.day}
//       />
//     </label>
//     <div className="button-row">
//       <button type="submit">Save</button>
//       <button onClick={() => setEditing(false)}>Cancel</button>
//     </div>
//   </form>
// )}
// <div className="spacer" />

//       <MDBBtn rounded color="secondary"><div className="btn-text-top"> 28 </div><img src={BadRating} alt="bad rating" />
//       <div className="btn-text-btm">
//         Mon</div></MDBBtn>


//       <MDBBtn rounded color="secondary"><div className="btn-text-top"> 29 </div><img src={MehRating} alt="meh rating" /> 
//       <div className="btn-text-btm">
//         Tues</div></MDBBtn>


//       <MDBBtn rounded color="secondary"><div className="btn-text-top"> 30 </div><img src={BadRating} alt="bad rating" />
//       <div className="btn-text-btm">
//         Weds</div></MDBBtn>


//       <MDBBtn rounded color="secondary"><div className="btn-text-top"> 31 </div> <img src={AverageRating} alt="ave rating"/>
//       <div className="btn-text-btm">
//         Thurs</div> </MDBBtn>


//       <MDBBtn rounded color="success"><div className="btn-text-top"> 32 </div><img src={GoodRating} alt="good rating" />
//       <div className="btn-text-btm">
//         Fri</div></MDBBtn>


//       <MDBBtn rounded color="info"><div className="btn-text-top"> 33 </div> <img src={GoodRating} alt="good rating" />
//       <div className="btn-text-btm">
//         Sat</div></MDBBtn>


      
//     </Fragment>
//   );
// }

// export default ButtonPage;