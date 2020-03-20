import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Summary(props) {
  const equips = useSelector(state => state.equipments);

  return (
    <div style={{ marginTop: "50px" }}>
      <EquipCount>
        <span style={{ fontWeight: "700" }}>
          {equips.length}
        </span>{" "}
        equipamentos
      </EquipCount>
      <TotalConsumption>
        Consumo total <span>600kw/h</span>
      </TotalConsumption>
    </div>
  );
}

const EquipCount = styled.div`
  color: #fff;
  font-size: 24px;
`;

const TotalConsumption = styled.div`
  color: #f4f4f4;
  font-size: 24px;
  margin-top: 5px;
  span {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
  }
`;
