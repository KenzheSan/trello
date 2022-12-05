import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <DivSideBar>
      <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:0e859f58-00cf-4ecd-a7e0-146be2ec9457/trello-logo.svg?cdnVersion=517" />
    </DivSideBar>
  );
}

export default Header;

const DivSideBar = styled.div`
  background: brown;
  border-radius: 3px;
  border: 2px solid bisque;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 50px;
  background-color: #ecf3f3;
  border-color:#888; 
  :hover {
    background-position: center top;
    background-color:  #000000;
    color: #f6f6f6;
    -moz-box-shadow: 0px 2px 9px #888;
    -webkit-box-shadow: 0px 2px 9px #888;
    box-shadow: 0px 2px 9px #888;
      -webkit-transition: all 3.2s ease;
  }
`;

const H1 = styled.h1`
  color: red;
  font-weight: 600;
`;

const Image = styled.img`
  width: 130px;
`;
