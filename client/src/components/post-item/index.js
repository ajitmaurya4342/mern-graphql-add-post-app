import React from "react";
import {
  PostItemContainer,
  UserProfileImage,
  UserContainer,
  UserContentWrapper,
} from "./styles";
import { v4 as uuidv4 } from "uuid";

const PostItem = ({ data }) => {
  console.log("data :>> ", data);
  return (
    <PostItemContainer>
      <UserContainer>
        <UserContentWrapper>
          <div>
            <label id="username">{data?.username}</label>
            <label id="time">{data?.createdAt}</label>
          </div>
          <UserProfileImage
            src={`https://icotar.com/avatar/${uuidv4()}?s=200`}
            alt="img"
          />
        </UserContentWrapper>
        <div id="divider"></div>
        <label id="post-body">{data?.body}</label>
      </UserContainer>
    </PostItemContainer>
  );
};

export default PostItem;
