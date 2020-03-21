import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import pigsvg from "../../Assets/imgs/pig_icon.svg";

export default function TotalSpends(props) {
  const equips = useSelector(state=> state.equipments)

  function CalculateBill() {
    let kwhPrice = 0.35;
    let billValue = 0;
    equips.map(item => {
      billValue += item.horasDia * item.potencia * kwhPrice/60;
    });
    return billValue;
  }
  return (
    <div style={{ display: "flex", paddingTop: "30px" }}>
      <Icon small={props.small}>
        <img style={{width:"100%"}} src={pigsvg} alt="Logo" />
      </Icon>
      <div>
        <Title small={props.small}>Gasto Mensal</Title>
        <Spends small={props.small}>R$ {CalculateBill().toFixed(2)}</Spends>
      </div>
    </div>
  );
}

const Icon = styled.div`
  height: ${props => props.small ? "50px" : "80px"};
  width: ${props => props.small ? "50px" : "80px"};
  box-sizing: border-box;
  margin-right: 30px;
`;
const Spends = styled.div`
  color: #fff;
  margin-top: 5px;
  font-size: ${props => props.small ? "24px" : "36px"};
  font-weight: 700;
`;

const Title = styled.div`
  color: #ffc83a;
  font-size: ${props => props.small ? "14px" : "18px"};
`;
