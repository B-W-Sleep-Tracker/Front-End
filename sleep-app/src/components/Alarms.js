import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NewAlarm from '../img/newAlarm.png';
import ActiveSlider from '../img/active_mobile.png';

const ImgContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 27px;
`;

const ImgStyle = styled.img`
  width: 40px;
  height: 40px;
`;

const AlarmContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: #2f80ed;
  margin-top: 13px;
`;

const Content = styled.div`
  width: 200px;
  margin: 0 auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 100%;
  color: #ffffff;
  font-family: Lato;
  justify-content: space-evenly;
`;

const SpanStyle = styled.span`
  font-size: 13px;
  padding-left: 10px;
  vertical-align: middle;
`;

const SliderStyle = styled.img`
  width: 21px;
  height: 12.8px;
`;

const ButtonStyle = styled.button`
  width: 134px;
  height: 31px;
  border-radius: 20px;
  background-color: #2f80ed;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f2f2f2;
  margin-top: 39px;
  margin-left: 134px;
  border: none;
`;

const ButtonContainer = styled.div`
  height: 557px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
`;

function Alarms() {
  return (
    <div>
      <Header />
      <ImgContainer className="img-container">
        <ImgStyle src={NewAlarm} className="img" />
      </ImgContainer>
      <AlarmContainer className="alarm-container">
        <Content className="content">
          <h1>
            7 : 30 <SpanStyle>pm</SpanStyle>
          </h1>
          <SliderStyle src={ActiveSlider} />
        </Content>
      </AlarmContainer>
      <ButtonContainer>
        <ButtonStyle type="submit">Record Sleep</ButtonStyle>
      </ButtonContainer>
    </div>
  );
}

export default Alarms;
