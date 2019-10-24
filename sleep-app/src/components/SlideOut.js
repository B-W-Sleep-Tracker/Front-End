import React from 'react';
import styled from 'styled-components';
import { Route, path, Link } from "react-router-dom";
import Header from './Header';
import Bell from '../img/bell.png';
import Stats from '../img/stats_icon.png';
import Graph from '../img/graph_icon.png';
import Lullaby from '../img/lullaby_icon.png';
import Pro from '../img/pro_icon.png';
import Settings from '../img/settings_icon.png';
import backgroundDesktop from "../img/backgroundDesktop.png";


const Nav = styled.nav`
  width: 276px;
  background-image: url(${backgroundDesktop});
  padding-top: 64px;
  height: 812px;
  opacity: 0.7;
`;

const LinkStyle = styled.a`
  display: flex;
  border: solid 1px white;
  border-left: none;
  align-items: center;
  color: white;
  font-size: 11px;
  height: 6%;
`;

const ImgStyle = styled.img`
  color: white;
  width: 30px;
  height: 30px;
  padding-left: 15px;
  padding-right: 30px;
`;

function SlideOut() {
  return (
    <Nav className="nav">
      <Link to={`/`}>
        <LinkStyle className="link-Style">
          <ImgStyle src={Bell} className="img-style" />
          <h1>Alarms</h1>
        </LinkStyle>
      </Link>

      <Link to={`/sleep-results`}>
        <LinkStyle className="link-Style">
          <ImgStyle src={Stats} className="img-style" />
          <h1>Stats</h1>
        </LinkStyle>
      </Link>

      <Link to={`/graph`}>
        <LinkStyle className="link-Style">
          <ImgStyle src={Graph} className="img-style" />
          <h1>Graph</h1>
        </LinkStyle>
      </Link>

      <LinkStyle className="link-Style">
        <ImgStyle src={Lullaby} className="img-style" />
        <h1>Lullaby</h1>
      </LinkStyle>

      <LinkStyle className="link-Style">
        <ImgStyle src={Pro} className="img-style" />
        <h1>Pro</h1>
      </LinkStyle>

      <LinkStyle className="link-Style">
        <ImgStyle src={Settings} className="img-style" />
        <h1>Settings</h1>
      </LinkStyle>

    </Nav>
  );
}

export default SlideOut;
