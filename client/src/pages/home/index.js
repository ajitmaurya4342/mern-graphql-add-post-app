import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { AppContainer } from "../../common/styles";
import { TitleWrapper, RecentPostWrapper } from "../posts-list/styles";
import PostItem from "../../components/post-item";

function Home() {
  const { loading, data: newData } = useQuery(FETCH_POSTS_QUERY);

  console.log("newData?.getPosts :>> ", newData?.getPosts);

  return (
    <AppContainer>
      <TitleWrapper>
        <label>Recent Posts</label>
      </TitleWrapper>
      <RecentPostWrapper>
        {!newData?.getPosts?.length && loading
          ? null
          : newData?.getPosts.map((data, index) => {
              return <PostItem data={data} key={index} />;
            })}
      </RecentPostWrapper>
    </AppContainer>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
