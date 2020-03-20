import React, { useState } from "react";
import styled from "styled-components";
import ButtonStyled from "../../Styled/Button";

export default function AddEquipment() {
  const [hours, setHours] = useState(0);
  function validadeHours(event) {
    if (event.target.value > 24) {
      return;
    } else {
      setHours(event.target.value);
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
          value={hours}
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
        ></input>
      </div>
      <ButtonStyled>Adicionar</ButtonStyled>
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
