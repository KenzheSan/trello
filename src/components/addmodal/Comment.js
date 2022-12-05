import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../store/cartSlice";

function Comment({item,id }) {
  console.log(id, "itemitme");
  const dispatch = useDispatch();
  const [getCommentvalue, setGetCommentvalue] = useState("");
  const onHandlerGetComment = (e) => {
    setGetCommentvalue(e.target.value);
  };
  const addComment = () => {
    dispatch(
      cartActions.subArrayAdd({ id, getCommentvalue })
    );
  };
  return (
    <div>
      <CommentContainer>
        <CommentInput
          placeholder="Напишите комментарий"
          onChange={onHandlerGetComment}
          value={getCommentvalue}
        />

        <BtnSave onClick={() => addComment()}>Сохранить</BtnSave>
      </CommentContainer>
    </div>
  );
}

export default Comment;

const CommentInput = styled.input`
  width: 400px;
  height: 30px;
  outline: none;
  border: none;
`;

const CommentContainer = styled.div`
  box-shadow: 0 0 2px 1px #888;
  width: 407px;
  height: 70px;
  padding-left: 8px;
`;

const BtnSave = styled.div`
  background-color: blue;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  width: 80px;
  border-radius: 7px;
  height: 20px;
  text-align: center;
  margin-top: 8px;
  margin-left: 4px;
`;
