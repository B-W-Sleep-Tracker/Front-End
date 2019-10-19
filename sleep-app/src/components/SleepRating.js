import React from 'react';
import { Button } from 'semantic-ui-react';
import FacebookIcon from '../img/facebookIcon.png';
import GoogleIcon from '../img/googleIcon.png';
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
  color: #000000;
  margin: 129px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: lightblue;
  align-content: center;
`;
const TimerText = styled.div`
  align-items: center;
  margin-left: 21px;
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
        <SleepDuration>
          <p>Sleep Duration</p>
          <Timer>
            <TimerText>6h 30m</TimerText>
          </Timer>
        </SleepDuration>
        {/* TODO: Components for sleep duration time */}
      </div>
      <div className="bottom-content">
        <h2>How was your sleep?</h2>
        <div className="buttons">
          <Button type="submit">
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
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default SleepRating;
