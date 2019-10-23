import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  width: 375px;
  height: 772px;
`;

const SleepDuration = styled.div`
  width: 117px;
  height: 21px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: red;
  margin: 104px 129px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  width: 100px;
  height: 30px;
  padding: 2px;
  border-radius: 8px;
  margin: -11px 10px;
  background-color: #ffffff;
  align-content: center;
`;
const TimerText = styled.div`
  align-items: center;
  margin-left: 21px;
`;

const HowWasYourSleep = styled.div`
  width: 345px;
  height: 158px;
  margin: 272px 15px;
  opacity: 0.6;
  border-radius: 10px;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HowWasYourSleepText = styled.div`
  width: 338px;
  height: 42px;
  font-family: Roboto;
  font-size: 24px;
  opacity: initial;
  margin: -23px 5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const Buttons = styled.div`
  display: flex;
`;

const Vector = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c4c4c4;
  margin: 92px 18px;
`;

const Ellipse2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eb5757;
  border-radius: 50%;
`;
const Ellipse3 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2994a;
  border-radius: 50%;
`;
const Ellipse4 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2c94c;
  border-radius: 50%;
`;
const Ellipse5 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #6fcf97;
  border-radius: 50%;
`;
function SleepRating() {
  return (
    <Container>
      <Header />
      <div className="top-content">
        <SleepDuration className="sleep-duration">
          <p>Sleep Duration</p>
          <Timer className="timer">
            <TimerText className="timer-text">6h 30m</TimerText>
          </Timer>
        </SleepDuration>
        {/* TODO: Components for sleep duration time */}
      </div>
      <div className="bottom-content">
        <HowWasYourSleep className="how-was-your-sleep">
          <HowWasYourSleepText className="how-sleep-text">
            <h2>How was your sleep?</h2>
          </HowWasYourSleepText>
          <div className="buttons">
            <Button type="submit">
              <img src="" alt=""></img>
            </Button>
            <Button type="submit">
              <img src="" alt=""></img>
            </Button>
            <Button type="submit">
              <img src="" alt=""></img>
            </Button>
            <Button type="submit">
              <img src="" alt=""></img>
            </Button>
          </div>
        </HowWasYourSleep>
      </div>
    </Container>
  );
}

export default SleepRating;
