import React, { useState } from "react";
import styled from "styled-components";
import InputModal from "../addmodal/InputModal";

function InnerTasks({ item, innerTasks }) {
  console.log(innerTasks, "tesskksss");
  const [openInputModal, setInputModal] = useState(false);
  const [seendingData, setSeendingData] = useState([]);
  const openModalInput = (id) => {
    const findUsr = seendingData.findIndex((item) => item.id == item.id);
    console.log(findUsr, "findd");
    if (findUsr == -1) {
      setInputModal(true);
      setSeendingData([...seendingData, item]);
    }
  };
  return (
    <ContainerInnerTask>
      <Modal>
        {openInputModal && (
          <InputModal
            id={item.id}
            item={item}
            seendingData={seendingData}
            setInputModal={setInputModal}
          />
        )}
      </Modal>
      <List
        defaultValue={item.value}
        onClick={() => {
          openModalInput(item.id);
        }}
      />
    </ContainerInnerTask>
  );
}

export default InnerTasks;

const List = styled.textarea`
  width: 190px;
  height: 15px;
  border: 2px solid white;
  border-color: white;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px #888;
  resize: none;
  margin: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
`;
const Modal = styled.div`
  position: relative;
`;

const ContainerInnerTask = styled.div``;
