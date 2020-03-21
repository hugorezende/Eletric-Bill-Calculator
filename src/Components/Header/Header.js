import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <HeaderWrapper>
      <Title>
        Energy<span>Calculator</span>
      </Title>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  color: #fff;
  border-bottom: #4e4e4e solid 1px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  span {
    color: #ffc83a;
  }
`;
