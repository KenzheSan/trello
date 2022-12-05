import React, { useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../store/cartSlice";
function SignInForm({ getUserData, get }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const seendingUserData = async (event) => {
    event.preventDefault();
    if (!userData.email.trim() && !userData.password.trim()) return null;

    const data = getUserData.find(
      (item) =>
        item.email === userData.email &&
        userData.password === item.password
    );
    if (data) {
      return alert("такой пользователь уже существует");
    } else {
      navigate("/list");
    }
    dispatch(postUser(userData));
    get();
  };

  const onHandleEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const onHandlerPassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };
  const onHandleLogin = () => {
    navigate("/login");
  };

  return (
    <ContainerForm onSubmit={seendingUserData}>
      <H1>Регистрация</H1>
      <Input
        onChange={onHandleEmail}
        value={userData.email}
        placeholder="укажите адрес электронной почты"
        type='email'
      />
      <Input
        onChange={onHandlerPassword}
        value={userData.password}
        placeholder="Введите пароль"
        type='password'
      />
      <Btn type="submit">вход</Btn>
      <OpenAccount onClick={onHandleLogin}>У меня есть аккаунт</OpenAccount>
    </ContainerForm>

  );
}

export default SignInForm;

const ContainerForm = styled.form`
  margin: 0 auto;
  background: white;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  height: 360px;
  width: 400px;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 250px;
  padding-left: 10px;
  height: 40px;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  margin: 5px;
  ::placeholder {
    padding-left: 8px;
  }
`;
const Btn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  width: 150px;
`;

const H1 = styled.h1`
  color: #999999;
  font-family: arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 1px;
`;

const OpenAccount = styled.div`
  font-weight: bold;
  margin-top: 20px;
  color: black;
`;
