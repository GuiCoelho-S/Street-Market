import styled from 'styled-components';

export const Container = styled.div`
  margin:0 auto;
  width:100%;
  height:100%;

`;

export const Main = styled.main`
  margin:0 auto;
  width:clamp(300px, 80%, 600px);
  height:clamp(300px, 300px, 500px);
  border: 1px solid lightgreen;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  border-radius:20px;

`