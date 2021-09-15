import styled from 'styled-components';

export const Badge = styled.div`
margin:0;
position:relative;

`
export const BadgeIcon = styled.aside`
  
  width:60px;
  height:60px;
  padding:0;
  border-radius:50%;
  background-color:var(--red);
  display:grid;
  place-content:center;

  svg {
      width:60px;
      fill:white;
  }
`;
export const Counter = styled.div`
position:absolute;
top:0;
right:0;
width:22px;
height:22px;
border-radius:50%;

background-color:black;
color:white;
display:grid;
place-content:center;


`