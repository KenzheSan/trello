import { createPortal } from "react-dom";
import styled from "styled-components";
import Comment from "./Comment";
function InputModal({ seendingData, setInputModal, item ,id}) {
  const description = seendingData.map(
    (item) => (
      setInputModal(item.id), (<ListDes key={item.id}>{item.value}</ListDes>)
    )
  );
  const onCloseModal = () => setInputModal(false);
  return createPortal(
    <ContainerModal>
      <H3 onClick={onCloseModal}>Закрыть</H3>
      {description}
      <Description>
        <DesText>
          <Title>Описание</Title>
          <Textarea />
        </DesText>
        <BtnContainer>
          <SaveBtn>Сохранить</SaveBtn>
          <СancellBtn>Отмена</СancellBtn>
        </BtnContainer>
      </Description>
      <CommentDiv>
        <Comment item={item} id={id} />
      </CommentDiv>
    </ContainerModal>,

    document.getElementById("inputlist")
  );
}

export default InputModal;
const ListDes = styled.li`
  list-style: none;
`;
const Title = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ContainerModal = styled.div`
  width: 600px;
  height: 640px;
  background-color: white;
  position: absolute;
  bottom: 20px;
  left: 400px;
`;
const H3 = styled.h3`
  text-align: end;
  margin-right: 20px;
`;
const DesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: end;
  margin-left: 40px;
`;

const Description = styled.div`
  width: 400px;
  /* border: 1px solid black;  */
  height: 300px;
`;
const СancellBtn = styled.button`
  background-color: white;
  border: none;
  :hover {
    transition: 2s;
    background-color: #bbb;
  }
`;
const SaveBtn = styled.button`
  background-color: blue;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  width: 90px;
  border-radius: 7px;
  height: 30px;
`;
const Textarea = styled.textarea`
  width: 400px;
  height: 100px;
  border: 1px solid white;
  outline: none;
  resize: none;
  box-shadow: 0 0 2px 1px #888;
`;

const BtnContainer = styled.div`
  width: 200px;
  display: flex;
  gap: 10px;
  justify-content: end;
  margin-top: 10px;
  margin-left: 10px;
`;
const CommentDiv = styled.div`
  position: absolute;
  left: 48px;
  bottom: 270px;
`;
