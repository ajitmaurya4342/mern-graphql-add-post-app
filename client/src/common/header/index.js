import React from "react";
import { AppContainer } from "../styles";
import {
  HeaderWrapper,
  AppLogo,
  HeaderContainer,
  NavLabel,
  AppLink,
} from "./styles";
import FreeFall from "../../images/free-fall.svg";
import { REGISTER_ROUTE, LOGIN_ROUTE, HOME_ROUTE } from "../../utils/constant";

function Header() {
  return (
    <HeaderWrapper>
      <AppContainer>
        <HeaderContainer>
          <AppLogo src={FreeFall} alt="app-logo" />
          {/* <AppLabel>Free Fall</AppLabel> */}
          <AppLink to={HOME_ROUTE}>
            <NavLabel>Home</NavLabel>
          </AppLink>
          <AppLink to={LOGIN_ROUTE} is_auto="true">
            <NavLabel>Login</NavLabel>
          </AppLink>
          <AppLink to={REGISTER_ROUTE}>
            <NavLabel>Register</NavLabel>
          </AppLink>
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default Header;
