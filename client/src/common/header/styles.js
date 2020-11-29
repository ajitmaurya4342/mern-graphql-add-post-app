import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  background-color: #fff;
  min-height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

// display: flex;
export const AppLogo = styled.img`
  width: 50px;
  background-color: rgba(55, 65, 81, 0.3);
  /* background: #fff; */
  border-radius: 50%;
  transform: rotate(60deg);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const NavLabel = styled.label`
  color: rgb(55, 65, 81);
  letter-spacing: 0.5px;
  font-size: 20px;
  cursor: pointer;
`;

export const AppLink = styled(Link)`
  text-decoration: none;
  margin-left: ${(p) => {
    if (p.is_auto === "true") {
      return "auto";
    } else {
      return "4px";
    }
  }};

  padding: 16px;
  &:hover {
    background-color: rgba(55, 65, 81, 0.1);
    cursor: pointer;
    border-radius: 4px;
  }
`;
