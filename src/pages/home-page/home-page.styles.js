import styled from "styled-components";

export const HomeContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HomeCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 150px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
