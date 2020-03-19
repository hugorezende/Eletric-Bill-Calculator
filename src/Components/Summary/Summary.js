import React from 'react'
import styled from 'styled-components'
export default function Summary(props) {
    return (
        <div style={{marginTop:"50px"}}>
            <EquipCount><span style={{fontWeight:"700"}}>16</span> equipamentos</EquipCount>
            <TotalConsumption>Consumo total <span>600kw/h</span></TotalConsumption>
        </div>
    )
}

const EquipCount = styled.div`
    color:#fff;
    font-size:24px;
`;

const TotalConsumption = styled.div`
    color:#F4F4F4;
    font-size:24px;
    margin-top:5px;
    span{
        color:#fff;
        font-size:30px;
        font-weight:600;
    }
`;