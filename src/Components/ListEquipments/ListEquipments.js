import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import config from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyled from "../../Styled/Button";
import Modal from "react-modal";
import AddEquipment from "../AddEquipment/AddEquipment";

export default function ListEquipments(props) {
  useEffect(() => {
    getData_device();
  }, []);

  var databaseRef = Firebase.database().ref("/devices");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data, setData] = useState({});

  const equips = useSelector(state => state.equipments);
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }

  function getData_device() {
    databaseRef.on("value", snapshot => {
      setData(snapshot.val());
      //Object.entries(snapshot.val()).map((item)=>console.log(item[0]))
    });
  }

  function addItem() {
    Firebase.database()
      .ref("/devices")
      .push({ type: "cozinha", name: "Geladeira", potencia: "300w" });
    console.log("DATA SAVED");
  }

  return (
    <>
      <BoxEquipments>
        {data.length == 0 ? (
          <NoItem>Adicione um equipamento</NoItem>
        ) : (
          Object.entries(data).map(index => (
            <ListItem key={index[0]}>
              <div>{index[1].equipamento}</div>
              <div>{index[1].horasDia} horas por dia</div>
            </ListItem>
          ))
        )}
      </BoxEquipments>
      <ButtonStyled onClick={() => addItem()}>Adicionar</ButtonStyled>

      <Link to="/add">
        <ButtonStyled>Outra pagina</ButtonStyled>
      </Link>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Minimal Modal Example"
        style={modalStyle}
        onRequestClose={closeModal}
      >
        <AddEquipment closeModal={closeModal} />
      </Modal>
    </>
  );
}

const NoItem = styled.div`
  margin: 30px 0;
  font-size: 18px;
  text-align: center;
`;
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    border: "none",
    borderRadius: "20px",
    background: "linear-gradient(180deg, #4A4A4A 0%, #2B2B2B 100%)",
    maxWidth: "500px",
    width: "90vw",
    height: "80vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const BoxEquipments = styled.div`
  height: 350px;
  overflow-y: scroll;
  padding: 0 10px;
  box-sizing: border-box;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ListItem = styled.div`
  background-color: #4a4a4a;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  div {
    width: 50%;
  }
`;
