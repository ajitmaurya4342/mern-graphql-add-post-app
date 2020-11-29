import React from "react";
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  LoginLabel,
  LoginLogoContainer,
  BackWhiteBorder,
} from "./styles";
import LoginLogoImage from "../../images/earth.svg";
import {
  AppContainer,
  AppInput,
  AppForm,
  AppButton,
  AppFormLabel,
  Wave,
} from "../../common/styles";

const Login = () => {
  return (
    <AppContainer>
      <LoginContainer>
        <LoginCard>
          <Wave id="wave-ui" />
          <LoginLogoContainer>
            <BackWhiteBorder />
            <LoginLogo src={LoginLogoImage} alt="login-logo"></LoginLogo>
          </LoginLogoContainer>
          <LoginLabel>Welcome User</LoginLabel>
          <AppForm style={{ marginBottom: "56px" }}>
            <AppFormLabel>Username</AppFormLabel>
            <AppInput type="text" />
            <AppFormLabel>Password</AppFormLabel>
            <AppInput type="text" />
            <AppButton>Login</AppButton>
          </AppForm>
        </LoginCard>
      </LoginContainer>
    </AppContainer>
  );
};

export default Login;
