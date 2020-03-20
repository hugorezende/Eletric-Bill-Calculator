import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonStyled from "../../Styled/Button";

export default function AddEquipment(prop) {
  const [equipmentsData, setEquipmentsData] = useState({hours:0,number:0});

  const dispatch = useDispatch();

  function addEquip() {
    console.log("dadsa");
    dispatch({ type: "ADD_EQUIPMENT", name:"test", potencia:100, horasDia:equipmentsData.hours });
    prop.closeModal()
  }

  function validadeHours(event) {
    if (event.target.value > 24) {
      return;
    } else {
      setEquipmentsData({hours:event.target.value});
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          color: "#ffffff",
          fontSize: "18px",
          margin: "10px 0",
          fontWeight: "600"
        }}
      >
        Horas ligado por dia
      </div>
      <div>
        <input
          style={style}
          placeholder="1"
          type="number"
          min="0"
          max="24"
          value={equipmentsData.hours}
          onChange={validadeHours}
        ></input>
      </div>

      <div
        style={{
          color: "#ffffff",
          fontSize: "18px",
          margin: "10px 0",
          fontWeight: "600"
        }}
      >
        Numero de equipamentos
      </div>
      <div>
        <input
          style={style}
          placeholder="1"
          type="number"
          min="0"
          max="24"
          value={equipmentsData.number }
        ></input>
      </div>
      <ButtonStyled onClick={()=> addEquip()}>Adicionar</ButtonStyled>
    </div>
  );
}

const style = {
  outline: "none",
  width: "100px",
  border: "none",
  fontFamily: "DM Sans",
  fontWeight: "600",
  padding: "20px",
  textAlign: "center",
  borderRadius: "20px",
  fontSize: "36px"
};

const Input = styled.input`
  outline: none;
  width: 100px;
  border: none;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  font-size: 36px;
  ::-webkit-input-placeholder {
    color: #dadada;
  }
`;
