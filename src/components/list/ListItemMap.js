import React from "react";
import styled from "styled-components";
import ListTodo from "./ListTodo";

function ListItemMap() {
  return (
    <DivContent>
      <ListTodo />
    </DivContent>
  );
}

export default ListItemMap;

const DivContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
