import styled from 'styled-components';

export const Container = styled.div`
  width:100px;
  height: 40px;
  position:absolute;
  display:flex;
  align-items: center;
  justify-content: space-between;
  bottom:0;
  right:auto;
  transform:translate(10px, -10px);

  @media(max-width:730px){
    left:110px;   
}

  @media(max-width:530px){
    
    bottom:0;
    left:50%;
    transform: translate(-50%, -15%);
  }
`;

export const ButtonItem = styled.button`
display:grid;
place-content:center;
width:26px;
height:26px;
border-radius: 50%;
background-color: var(--grey);
border:none;

svg {
    fill:white;
    width:100%;
}


`