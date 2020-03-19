import styled from "styled-components";

const ButtonStyled = styled.div`
  cursor: pointer;
  color: #fff;
  margin: 20px auto;
  text-align: center;
  font-weight: 600;
  height: 50px;
  border-radius: 25px;
  padding: 15px;
  box-sizing: border-box;
  background: #ffc83a;
  transition: all .5s;
  &:hover{
    background: #ff983a;
  }
`;

export default ButtonStyled;
