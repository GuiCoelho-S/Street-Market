import styled from 'styled-components';

export const Header = styled.div`
  width:100%;
  max-width:1280px;
  margin:0 auto;
  height:var(--header-size);
  display: flex;
  align-items:center;
  justify-content: center;
  padding-bottom:20px;
`;

export const Title = styled.h1`
    
    font-size: clamp(1.75rem, 4vw, 2.4rem);
    color: var(--color-title);
    font-weight:20px;
    padding-right: clamp(10px, 5%, 300px);
`

export const Icon = styled.div`
height: calc(var(--header-size)*0.8);
width: calc(var(--header-size)*0.8);
border-radius:50%;
padding:1px;
display:grid;
place-items:center;
background-color:#efefef;

svg {
  fill:var(--color-icon);
  width:60%;
}
`