import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  width: 375px;
  height: 772px;
`;
const Header = styled.div`
  width: 375px;
  height: 40px;
  background-color: #000000;
  display: flex;
`;
const Menu = styled.a`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 46px;
  height: 100%;
  padding-left: 10px;
`;
const MenuLines = styled.div`
  width: 23px;
  height: 2px;
  border-radius: 10px;
  background-color: #ffffff;
`;
const LogoImg = styled.div`
  width: 91px;
  height: 25px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  display: flex;
  align-items: center;
  background-color: #9b51e0;
`;
const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;
const Links = styled.a`
  width: 35px;
  height: 100%;
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  display: flex;
  align-items: center;
`;
const UserLogo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
`;
const Ellipse = styled.div`
  width: 3px;
  height: 3px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 5px;
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
  flex-wrap: wrap
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

const Ellipse2 = styled.div `
  width: 50px;
  height: 50px;
  background-color: #eb5757;
  border-radius: 50%;
`;
const Ellipse3 = styled.div `
  width: 50px;
  height: 50px;
  background-color: #f2994a;
  border-radius: 50%;
`;
const Ellipse4 = styled.div `
  width: 50px;
  height: 50px;
  background-color: #f2c94c;
  border-radius: 50%;
`;
const Ellipse5 = styled.div `
  width: 50px;
  height: 50px;
  background-color: #6fcf97;
  border-radius: 50%;
`;
function SleepRating() {
  return (
      <Container>
        <Header>
          <Menu>
            <MenuLines></MenuLines>
            <MenuLines></MenuLines>
            <MenuLines></MenuLines>
          </Menu>
          <LogoContainer>
            <LogoImg>Opti-sleep</LogoImg>
          </LogoContainer>
          <LinksContainer>
            <Links>
              <UserLogo></UserLogo> {/* TODO: Replace with User Logo */}
            </Links>
            <Links>Sign In</Links>
            <Ellipse></Ellipse>
            <Links>Sign Up</Links>
          </LinksContainer>
        </Header>
      <div className="top-content">
        <SleepDuration className="sleep-duration">
          <p>Sleep Duration</p>
          <Timer className ="timer">
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
          <Buttons>
            <Vector> <Ellipse2 /> </Vector>
            <Vector> <Ellipse3 /> </Vector>
            <Vector> <Ellipse4 /> </Vector>
            <Vector> <Ellipse5 /> </Vector>
            {/* <Button type="submit">
              <img src=""></img>
            </Button>
            <Button type="submit">
              <img src=""></img>
            </Button>
            <Button type="submit">
              <img src=""></img>
            </Button>
            <Button type="submit">
              <img src=""></img>
            </Button> */}
          </Buttons>
        </div>
        </HowWasYourSleep> 
      </div>
    </Container>
  );
}

export default SleepRating;
