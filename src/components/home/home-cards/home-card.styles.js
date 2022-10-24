import styled from "styled-components";

export const HomeCard = styled.div`
  background: white;
  width: 284px;
  height: 800px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #ccc, 0 6px 20px 0 #ccc;
  padding: 15px;
  margin: 10px;
  @media (max-width: 500px) {
    width: 270px;
  }
`;

export const HomeCardsImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5%;
  border: 1px solid #969696;
  margin-top: 10px;
`;

export const HomeCardsText = styled.p`
  color: #484747;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
`;

export const HomeCardsTitle = styled(HomeCardsText)`
  font-size: 32px;
  font-weight: 300;
  margin-top: 30px;
  height: 60px;
`;

export const HomeCardsDescription = styled(HomeCardsText)`
  height: 350px;
`;
