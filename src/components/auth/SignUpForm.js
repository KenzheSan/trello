import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function SignUpForm({ getUserData }) {
  const navigate = useNavigate();
  const [accVerification, setAccVerification] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const seendingUserData = (event) => {
    event.preventDefault();
    const data = getUserData.find((item) => {
      if (item.email === userData.email && item.password == userData.password) {
        return navigate("/list");
      }
    });
    return data;
  };

  const onHandleEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const onHandlerPassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };
 
  
  return (
    <Divcontainer>
      <ContainerForm onSubmit={seendingUserData}>
        <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:0e859f58-00cf-4ecd-a7e0-146be2ec9457/trello-logo.svg?cdnVersion=517" />
        <Input
          onChange={onHandleEmail}
          value={userData.email}
          placeholder="Укажите адрес электронной почты"
          type="email"
          />
        <Input
          onChange={onHandlerPassword}
          value={userData.password}
          placeholder="Введите пароль"
          type="password"
        />
        {accVerification && <p>Такого аккаунта не существует</p>}
        <Btn type="submit">Войти</Btn>
      </ContainerForm>
    </Divcontainer>
  );
}

export default SignUpForm;

const ContainerForm = styled.form`
  margin: 0 auto;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  background: #f1f1f1 url(pen.png) no-repeat top right;
  font-size: 14px;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;
const Input = styled.input`
  width: 250px;
  height: 40px;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  margin: 5px;
  ::placeholder {
    padding-left: 10px;
  }
`;
const Btn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  width: 170px;
  height: 40px;
`;

const Divcontainer = styled.div`
  margin: auto;
  width: 100%;
  height: 80vh;
`;
const Image = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;
