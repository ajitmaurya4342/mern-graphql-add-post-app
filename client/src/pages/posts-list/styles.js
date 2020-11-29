import styled from "styled-components";
import { SM, MD, LG } from "../../utils/constant";

export const TitleWrapper = styled.div`
  width: 100%;
  color: rgb(55, 65, 81);
  text-align: center;
  font-size: 24px;
  margin: 16px 0;
`;

export const RecentPostWrapper = styled.div`
  display: grid;
  grid-row-gap: 8px;
  grid-column-gap: 8px;
  grid-template-columns: 1fr;

  /* @media ${SM} {
    grid-template-columns: 1fr 1fr;
  } */

  @media ${LG} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
