import styled from "styled-components";
import { SM, MD, LG, XL } from "../utils/constant";

export const AppContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  /* @media ${SM} {
    width: 640px;
  } */
  @media ${MD} {
    width: 720px;
  }
  @media ${LG} {
    width: 960px;
  }
  @media ${XL} {
    width: 1240px;
  }
`;

export const AppBody = styled.div`
  background-color: #ecfdff;
  min-height: 100vh;
  width: 100%;
`;

export const AppInput = styled.input`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);

  &:focus {
    outline-width: 0;
  }
`;

export const AppFormLabel = styled.label`
  margin-top: 16px;
  color: #fff;
`;

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const AppButton = styled.button`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 32px;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;

export const Wave = styled.div`
  width: 1000px;
  height: 1025px;
  position: absolute;
  top: -25%;
  left: 50%;
  margin-left: -500px;
  margin-top: -600px;
  border-radius: 35%;
  background: rgba(255, 255, 255, 0.1);
  animation: wave 15s infinite linear;

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

export const AppBodyWrapper = styled.div`
  width: 100%;
  position: absolute;
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;

export const Layout = styled.div`
  width: 100%;
  height: calc(100vh -64px);
  position: absolute;
  top: 64px;
  left: 0;
`;
