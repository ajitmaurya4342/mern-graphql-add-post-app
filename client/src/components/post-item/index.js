import React from "react";
import {
  PostItemContainer,
  UserProfileImage,
  UserContainer,
  UserContentWrapper,
} from "./styles";
import { v4 as uuidv4 } from "uuid";

const PostItem = () => {
  return (
    <PostItemContainer>
      <UserContainer>
        <UserContentWrapper>
          <div>
            <label id="username">This is Post Item</label>
            <label id="time">some times ago</label>
          </div>
          <UserProfileImage
            src={`https://icotar.com/avatar/${uuidv4()}?s=200`}
            alt="img"
          />
        </UserContentWrapper>
        <div id="divider"></div>
        <label id="post-body">This is Post Item</label>
      </UserContainer>
    </PostItemContainer>
  );
};

export default PostItem;
