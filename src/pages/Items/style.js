import styled from "styled-components";

import { Main } from "../../components/Container";

export const ContainerItens = styled(Main)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position:relative;
  padding:10px 20px;

`;

export const UserData = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid green;
  
  justify-content: space-between;
  align-items:center;

  h1 {
    font-size: 1.4rem;
    font-family:  sans-serif;
  }
`;

export const TotalValue = styled.aside`
  align-self: start;
  width: 100px;
  border: 1px solid green;
  
  p {
    text-align:center;
  }
`;

export const ListFruit = styled(UserData)`` 