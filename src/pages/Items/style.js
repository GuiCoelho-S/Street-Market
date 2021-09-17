import styled from "styled-components";
import { Button, PreviousButton } from "../../components/Button";
import { Main } from "../../components/Container";

export const ContainerItens = styled(Main)`
  display: flex;
  height:auto;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position:relative;
  padding:20px 20px 60px 20px;
  border: 1px solid green;

  ${Button}{
    transform:translateY(30px);
  }
  ${PreviousButton}{
    transform:none;
  }
`;

export const UserData = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  
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
  
  p {
    text-align:center;
  }
`;

export const ListFruit = styled(UserData)`
padding-top:20px;
gap:20px;
justify-content:space-between;
height:100%;

@media (max-width:930px){
  justify-content: center;
}

` 

export const emptyDiv = styled.div`
width:100%;
height:10vh;
`

