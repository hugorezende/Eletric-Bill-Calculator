import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

import roomIcon from "../../Assets/Icons/room_icon.svg";

export default function TypesEquipments() {
  const [types, setTypes] = useState([
    { room: "Quarto", icon: "room_icon.svg" },
    { room: "Sala", icon: "room_icon.svg" },
    { room: "Banheiro", icon: "room_icon.svg" },
    { room: "Cozinha", icon: "room_icon.svg" }
  ]);
  return (
    <>
      <h3 style={{ color: "#fff", margin: "10px 0" }}>Adicionar Equipamento</h3>
      <Wrapper>
        {types.map(item => (
          <Link to={`/add/${item.room.toLowerCase()}`}>
            <RoomItem>
              <Icon>
                <img src={roomIcon} />
              </Icon>
              <Title>{item.room}</Title>
            </RoomItem>
          </Link>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  color: #fff;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.5s;
`;

const RoomItem = styled.div`
  margin: 10px;
  width: 150px;
  height: 150px;
  background: linear-gradient(130.04deg, #727272 -0.01%, #4a4a4a 100.18%);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
    ${Title} {
      font-size: 16px;
    }
  }
`;

const Icon = styled.div`
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 14px;
`;
