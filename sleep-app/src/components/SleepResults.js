import React from 'react';
import styled from 'styled-components';
// import { Button } from 'semantic-ui-react';
import Header from './Header';
import ThreeRating from '../img/3_rating.png';

const TitleContainer = styled.div`
  width: 100%;
  height: 21px;
  margin-top: 122px;
  margin-bottom: 0;
`;

const TitleStyle = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: black;
  text-align: center;
  margin-bottom: 0;
`;

const TimeStyle = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 5px;
`;

const ImgStyle = styled.img`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  display: block;
  margin-top: 112px;
`;

const TextContainer = styled.div`
  opacity: 0.6;
  margin: 0 auto;
  width: 345px;
  height: 158px;
  border-radius: 10px;
  background-color: rgba(196, 196, 196, 0.8);
  margin-top: 51px;
`;

const TextStyle = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 28.5px;
  letter-spacing: normal;
  color: #ffffff;
  padding-top: 12px;
  padding-left: 9px;
`;

function SleepResults() {
  return (
    <div>
      <Header className="header" />
      <TitleContainer className="title-container">
        <TitleStyle className="title-style">Sleep Duration</TitleStyle>
        {/* TODO: Components for sleep duration time */}
        <TimeStyle className="time-style"></TimeStyle>
      </TitleContainer>
      <div className="img">
        <ImgStyle className="img-style" src={ThreeRating}></ImgStyle>
      </div>
      <TextContainer className="text-container">
        <TextStyle className="text-style">
          Your sleep time is below the recommended average. Try going to sleep
          earlier and removing distractions before bed.
        </TextStyle>
      </TextContainer>
    </div>
  );
}

export default SleepResults;
