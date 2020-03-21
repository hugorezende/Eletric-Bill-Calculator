import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TotalSpends from "../Components/TotalSpends/TotalSpends";
export default function AddEquipmentPage() {
  let { room } = useParams();
  return (
    <>
      <TotalSpends small />
      <div style={{ marginTop: "20px" }}>
        <h3>Adicionar Equipamentos</h3>

        <ItemRow>
          <Column>Lampada</Column>
          <Column>5W</Column>
          <Column>
            <BtAdd alt="Adicionar" />
          </Column>
        </ItemRow>

        <ItemRow>
          <Column>Lampada</Column>
          <Column>5W</Column>
          <Column>
            <BtAdd />
          </Column>
        </ItemRow>

        <ItemRow>
          <Column>Televisao</Column>
          <Column>5W</Column>
          <Column>
            <BtAdd />
          </Column>
        </ItemRow>
      </div>
    </>
  );
}

const Column = styled.div`
  width: 30%;
  text-align: center;
  padding: 20px 0;
  &:nth-child(1) {
    text-align: left;
  }
`;
const ItemRow = styled.div`
  display: flex;
`;

const BtAdd = styled.div.attrs(props=>({
    alt: props.alt
}))`
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 8px;
  text-align: center;
  font-weight: 600;
  width: 40px;
  height: 40px;
  background-color: #ffc83a;
  border-radius: 20px;
  float: right;
  transition: all .5s;
  &:hover{
      background-color:#ff7a00
  }
  &:after{
      content:"+"
  }
`;
