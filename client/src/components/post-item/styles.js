import styled from "styled-components";

export const PostItemContainer = styled.div`
  background-image: linear-gradient(to top, white 0%, white 100%);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 18px;
`;

export const UserProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 2px solid rgba(160, 160, 160, 0.2);
`;

export const UserContentWrapper = styled.div`
  display: flex;

  & {
    div {
      display: flex;
      flex-direction: column;
      #username {
        font-size: 20px;
      }

      #time {
        font-size: 16px;
      }
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  & {
    #post-body {
      margin-top: 12px;
    }
    #divider {
      border: 0.5px solid rgba(160, 160, 160, 0.1);
      width: 100%;
      margin-top: 12px;
    }
  }
`;
