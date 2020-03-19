import React, { useState } from "react";
import styled from "styled-components";

export default function ListEquipments(props) {
  return (
    <BoxEquipments>
      {props.equipments.map((item, index) => (
        <ListItem key={index}>
          <div>{item.aparelho}</div>
          <div>{item.horasDia} horas por dia</div>
        </ListItem>
      ))}
    </BoxEquipments>
  );
}
const BoxEquipments = styled.div`
  height: 350px;
  overflow-y: scroll;
  padding:0 10px;
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
