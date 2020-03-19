import React, {useState} from "react";
import "./App.css";
import styled from 'styled-components'
import TotalSpends from "./Components/TotalSpends/TotalSpends";
import ListEquipments from "./Components/ListEquipments/ListEquipments";
import Summary from "./Components/Summary/Summary";
import ButtonStyled from "./Styled/Button";

function App() {
  const [equipments,setEquipments] = useState([{"aparelho":"Geladeira","potencia":300,"horasDia":6}])
  const [valor,setValor] = useState(0)

  function AddEquip(){
    setEquipments([...equipments,{"aparelho":"Fogao","potencia":100,"horasDia":12}]);
  }
  return (
    <div>
      <Wrapper>
        <TotalSpends equipments={equipments} />
        <ListEquipments equipments={equipments} />
        <Summary/>
        <ButtonStyled onClick={()=> AddEquip()}>Adicionar</ButtonStyled>
      </Wrapper>
    </div>
  );
}

const Wrapper =  styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default App;
