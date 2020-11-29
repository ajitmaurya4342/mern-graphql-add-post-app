import styled from "styled-components";
import { AppForm, AppInput, AppButton } from "../../common/styles";
export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: flex-start;
  background-image: linear-gradient(to top, white 0%, white 100%);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 18px;
`;

export const CreatePostInput = styled(AppInput)`
  margin-top: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(160, 160, 160, 0.1);
`;

export const Title = styled.label`
  font-size: 20px;
  color: rgb(55, 65, 81);
  text-align: center;
`;

export const CreatePostForm = styled(AppForm)`
  width: 100%;
  align-items: flex-start;
`;

export const SubmitPost = styled(AppButton)`
  align-self: center;
  background-color: rgba(160, 160, 160, 0.2);
  width: unset;
  margin-top: 16px;
  padding: 10px 64px;
  font-size: 18px;
`;
