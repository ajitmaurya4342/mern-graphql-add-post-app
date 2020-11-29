import React from "react";
import {
  CreatePostContainer,
  CreatePostInput,
  Title,
  CreatePostForm,
  SubmitPost,
} from "./styles";

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <Title>Create Post</Title>
      <CreatePostForm>
        <CreatePostInput />
        <SubmitPost>Submit</SubmitPost>
      </CreatePostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;
