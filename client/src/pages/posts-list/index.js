import React from "react";
import { AppContainer } from "../../common/styles";
import { TitleWrapper, RecentPostWrapper } from "./styles";
import CreatePost from "../../components/create-post";
import PostItem from "../../components/post-item";

function PostList() {
  return (
    <AppContainer>
      <TitleWrapper>
        <label>Recent Posts</label>
      </TitleWrapper>
      <RecentPostWrapper>
        <CreatePost />
        {[1, 1, 1, 1, 1, 1].map((data, index) => {
          return <PostItem key={index} />;
        })}
      </RecentPostWrapper>
    </AppContainer>
  );
}

export default PostList;
