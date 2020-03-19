import React from "react";
import styled from "styled-components";
import pigsvg from "../../Assets/imgs/pig_icon.svg";

export default function TotalSpends(props) {
  function CalculateBill() {
    let kwhPrice = 0.35;
    let billValue = 0;
    props.equipments.map(item => {
      billValue += item.horasDia * item.potencia * kwhPrice/60;
    });
    return billValue;
  }
  return (
    <div style={{ display: "flex", paddingTop: "30px" }}>
      <Icon>
        <img src={pigsvg} alt="Logo" />
      </Icon>
      <div>
        <Title>Gasto Mensal</Title>
        <Spends>R$ {CalculateBill().toFixed(2)}</Spends>
      </div>
    </div>
  );
}

const Icon = styled.div`
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  margin-right: 30px;
`;
const Spends = styled.div`
  color: #fff;
  margin-top: 5px;
  font-size: 36px;
  font-weight: 700;
`;

const Title = styled.div`
  color: #ffc83a;
  font-size: 18px;
`;
