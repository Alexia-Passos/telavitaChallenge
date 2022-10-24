import styled from "styled-components";

export const HomeHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #1f35b5;
  box-shadow: 0 4px 8px 0 #ccc, 0 6px 20px 0 #ccc;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const HomeHeaderButton = styled.button`
  width: 400px;
  height: 50px;
  font-size: 32px;
  background-color: #1f35b5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: none !important;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 200px;
  }
`;
