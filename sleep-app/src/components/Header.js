import React from 'react';
import styled from 'styled-components';
import LogoMobile from '../img/logoMobile.png';

const HeaderStyle = styled.div`
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
  height: 63%;
  padding-left: 7px;
  padding-top: 7px;
`;

const MenuLines = styled.div`
  width: 23px;
  height: 2px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 17px;
`;

const LogoImg = styled.img`
  width: 91px;
  height: 25px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 11px;
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

function Header() {
  return (
    <div>
      <HeaderStyle>
        <Menu>
          <MenuLines></MenuLines>
          <MenuLines></MenuLines>
          <MenuLines></MenuLines>
        </Menu>
        <LogoContainer>
          <LogoImg src={LogoMobile} />
        </LogoContainer>
        <LinksContainer>
          <Links>
            <UserLogo></UserLogo> {/* TODO: Replace with User Logo */}
          </Links>
          <Links>Sign In</Links>
          <Ellipse></Ellipse>
          <Links>Sign Up</Links>
        </LinksContainer>
      </HeaderStyle>
    </div>
  );
}

export default Header;