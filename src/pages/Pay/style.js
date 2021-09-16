import styled from 'styled-components';
import { Button } from '../../components/Button';

export const configMotion = styled.div`
width:600px;
`
export const PayMethod = styled.main`
  
  width:clamp(300px, 100%, 600px);
  height:300px;
  border:1px solid var(--green);
  border-radius:30px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;

  *{
      font-family:montserrat;
  }
  select {
      background-color:transparent;
      border:var(--green) 1px solid;
      color:green;
      padding:8px;
      border-radius:8px;

      option {
          background-color:transparent;
      }
  }

  h1 {
      font-size:clamp(1.2rem, 2vh, 3rem);
      color:var(--red);
  }
  ${Button}{
      align-self:end;
      transform:translateX(-20px);
    
      @media (max-width:400px){
          align-self:center;
          transform:none;
      }
    } 

`;

export const FinalValue = styled.article`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;

div {
    color:red;
}
`

export const Final = styled.div`
position:relative;
margin:0 auto;
width:300px;
height:300px;
font-family:montserrat;
z-index:20;
border-radius:20px;
border:1px solid green;
text-align:center;
display:flex;
flex-direction: column;
align-items:Center;
justify-content:space-evenly;

h2 {
    padding: 10px 30px;
    color:blue;
}



p {
    color:black;
}

${Button}{
    border-radius:50%;
    height:30px;
    width:30px;
    position:absolute;
    right:5px;
    top:5px;
    * {
        padding:0;
    }
}
`
export const Link = styled.a`

    width:80px;
    padding:10px 20px;
    border-radius:12px;
    background-color:black;

`
export const ImageNetlify = styled.img`
display:block;
width:100%;
` 

export const Icon = styled.a`
display:block;
width:100px;
height:100px;
border-radius:50%;

svg {
    width:100%;
    scale:1.5;
}
`