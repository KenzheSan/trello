import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import InnerTasks from "./InnerTasks";
import reactTextareaAutosize from "react-textarea-autosize";

function ListInput({ id, innerTasks }) {
  const [inputValue, setInputValue] = useState("");
  const onhandlerValue = (e) => {
    setInputValue(e.target.value);
  };
  const onHandlerSeending = () => {
    if (!inputValue) return null;
    dispatch(
      cartActions.addValue({
        title: inputValue,
        id: Math.random(),
        innerTasks: [],
      })
    );
  };
  const [btnAddList, setBtnAddList] = useState(true);
  const [onTextareaValue, setOnTextareaValue] = useState("");
  const [openButton, setOpenButton] = useState(true);
  const OpenModal = () => setOpenButton(false);
  const [openListTod, setOpenListTodo] = useState(true);

  const dispatch = useDispatch();
  const onHandlerUser = (id) => {
    if (!onTextareaValue) return null;
    dispatch(
      cartActions.addListTodo({
        id,
        value: onTextareaValue,
        desId: Math.random(),
        checked: true,
        subArray: [],
      })
    );
    setOnTextareaValue("");
  };

  const openListTodo = () => {
    setOpenListTodo(false);
    setBtnAddList(true);
  };
  const onCloseList = (id) => {
    if (!onTextareaValue) {
      setOpenListTodo(true);
      setBtnAddList(false);
    } else {
      onHandlerUser(id);
      setBtnAddList(false);
    }
  };
  return (
    <Container>
      {openButton && <Button onClick={OpenModal}>+Добавить колонку</Button>}
      {!openButton && (
        <DivContent>
          <Input
            placeholder="Ввести заголовок списка"
            onChange={onhandlerValue}
            value={inputValue}
            autoFocus
          />
          {innerTasks.map((item) => (
            <InnerTasks key={item.id} item={item} innerTasks={innerTasks}/>
          ))}
          {!openListTod && (
            <div>
              <InputArea
                autoFocus
                placeholder="Ввести заголовок для этой карточки"
                value={onTextareaValue}
                onChange={(e) => setOnTextareaValue(e.target.value)}
                onBlur={() => {
                  onCloseList(id);
                }}
              />
              <ButtonTodoAdd
                onClick={(e) => {
                  onHandlerUser(id);
                }}
              >
                Добавить
              </ButtonTodoAdd>
            </div>
          )}

          {!btnAddList && !openButton && openListTod && (
            <>
              <BtnCart onClick={openListTodo}>+Добавить карточку</BtnCart>
            </>
          )}
          {btnAddList && openListTod && !openButton && (
            <ButtonList
              onClick={() => {
                onHandlerSeending();
                inputValue && setBtnAddList(false);
              }}
            >
              Добавить
            </ButtonList>
          )}
        </DivContent>
      )}
    </Container>
  );
}

export default ListInput;

const Input = styled.input`
  width: 190px;
  height: 30px;
  border: 2px solid blue;
  outline: none;
  border-radius: 4px;
`;

const InputArea = styled.textarea`
  width: 190px;
  height: 40px;
  border: 2px solid white;
  border-color: white;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px #888;
  resize: none;
  /* overflow: hidden; */
  min-height: 50px;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 10px;
  ::-webkit-input-placeholder {
    font-size: 11px;
  }
`;

const Button = styled.button`
  color: black;
  border: 2px solid white;
  background-color: #dbdada;
  border-radius: 3px;
  width: 180px;
  height: 40px;
  opacity: 0.9;
  margin: 10px;
  width: 210px;
  opacity: 0.5;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
  }
`;

const BtnCart = styled.button`
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 40px;
  opacity: 0.9;
  margin: 10px;
  width: 190px;
`;
const ButtonList = styled.button`
  color: white;
  font-size: 1em;
  border: 2px solid blue;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  opacity: 0.9;
  margin-right: 50px;
  gap: 10px;
  margin-top: 6px;
  margin-right: 90px;
  background-color: blue;
`;
const Container = styled.div``;

const ButtonTodoAdd = styled.div`
  width: 100px;
  height: 30px;
  background-color: blue;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;

const DivContent = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  min-height: 77px;
  background-color: white;
  white-space: pre-wrap;
  margin-left: 10px;
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 6px;
  animation: IN 0.3s ease-in;
  @keyframes IN {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
