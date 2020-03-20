import styled from "styled-components";

const ButtonStyled = styled.div`
  max-width: 300px;
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
  transition: all 0.5s;
  &:hover {
    background: #ff983a;
  }
`;

export default ButtonStyled;
