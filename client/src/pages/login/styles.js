import styled from "styled-components";
import { SM, MD, LG } from "../../utils/constant";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

export const LoginCard = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  background-image: linear-gradient(
    to top,
    rgb(45, 62, 70) 0%,
    rgb(45, 62, 70) 100%
  );
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;

  @media ${SM} {
    margin: 10px;
  }

  @media ${MD} {
    margin: 10px 60px;
  }

  @media ${LG} {
    margin: 10px 200px;
  }
`;

export const LoginLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 56px 0 0 0;
  position: relative;
`;

export const LoginLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: spin 40s linear infinite;
  -moz-animation: spin 40s linear infinite;
  animation: spin 40s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const LoginLabel = styled.label`
  color: #fff;
  line-height: 17px;
  font-size: 24px;
  margin: 16px 0;
`;

export const BackWhiteBorder = styled.div`
  border: 10px solid white;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;
