import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Alarm from "../img/Alarm.png";

const Nav = styled.nav`
  width: 276px;
  background-color: blue;
`;
const Text = styled.h1`
  color: red;
`;
function SlideOut() { 
  return (
    <Nav>  
      <a>
        <img src={Alarm}/>
        <h1>Alarms</h1>
      </a>
      <a>
        <img src=""/>
        <h1>Stats</h1>
      </a>
      <a>
        <img src=""/>
        <h1>Graph</h1>
      </a>
      <a>
        <img src=""/>
        <h1>Lullaby</h1>
      </a>
      <a>
        <img src=""/>
        <h1>Pro</h1>
      </a>
      <a>
        <img src=""/>
        <h1>Settings</h1>
      </a>
    </Nav>
 
  );
}

export default SlideOut;
