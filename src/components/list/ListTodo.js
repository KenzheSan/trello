import styled from "styled-components";
import { useSelector } from "react-redux";
import ListInput from "./ListInput";
function ListTodo() {
  const items = useSelector((state) => state.cart.items);
  return (
    <DivList>
      {items.map((item) => (
        <ListInput key={item.id} {...item} />
      ))}
    </DivList>
  );
}

export default ListTodo;

const DivList = styled.div`
  display: flex;
  gap: 20px;
  height: 700px;
  background: url("https://images.unsplash.com/photo-1494319921810-2fab6cce50a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
  background-size: cover;
  opacity: 0.9;
  width: 6000px;
  overflow: auto;
`;
