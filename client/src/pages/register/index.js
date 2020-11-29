import React from "react";
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  LoginLabel,
} from "../login/styles";
import RegisterLogoImage from "../../images/black-hole.svg";
import {
  AppContainer,
  AppInput,
  AppForm,
  AppButton,
  AppFormLabel,
  Wave,
} from "../../common/styles";
import { RegisterLogoContainer } from "./styles";

const Register = () => {
  return (
    <AppContainer>
      <LoginContainer>
        <LoginCard>
          <Wave id="wave-ui" />
          <RegisterLogoContainer>
            {/* <BackWhiteBorder /> */}
            <LoginLogo src={RegisterLogoImage} alt="login-logo"></LoginLogo>
          </RegisterLogoContainer>
          <LoginLabel>Become a member</LoginLabel>
          <AppForm style={{ marginBottom: "56px" }}>
            <AppFormLabel>Username</AppFormLabel>
            <AppInput type="text" />
            <AppFormLabel>Email</AppFormLabel>
            <AppInput type="text" />
            <AppFormLabel>Password</AppFormLabel>
            <AppInput type="text" />
            <AppFormLabel>Confirm Password</AppFormLabel>
            <AppInput type="text" />
            <AppButton>Register</AppButton>
          </AppForm>
        </LoginCard>
      </LoginContainer>
    </AppContainer>
  );
};

export default Register;
