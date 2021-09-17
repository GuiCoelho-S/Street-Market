import styled from 'styled-components';


export const Alert = styled.div`
position:absolute;
top:35%;
left:50%;

transform: translate(-50%, -50%);
width:clamp(300px, 80%, 400px);
height:140px;
background-color:#e04747;
border-radius:18px;
z-index:10;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

* {
    color:white;
}


`

export const CloseAlert = styled.button`
position:absolute;
width:26px;
height:26px;
right:auto;
background-color:inherit;
border:none;
display:grid;
place-items:Center;
right:10px;
top:10px;
cursor:pointer;
outline:none;
svg {
    padding:0 !important;
    fill:#ffffff;
}
`