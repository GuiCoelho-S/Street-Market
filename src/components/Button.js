import styled from 'styled-components';

import * as V from '../components/GlobalStyle/index';

export const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:140px;
    height: 2.3rem;
    font-size:1rem;
    background-color: ${(props) => (props.primary ? V.bgPrimary : V.bgSecondary)};
    color: ${(props) => (props.primary ? V.textPrimary : V.textSecondary)};
    border-color: ${(props) => (props.primary ? 'transparent' : ('green'))};
    border: 1px solid;
    padding: 0 0px;
    border-radius: 10px;
    transition:all 0.3s ease;
    
    cursor:pointer;

    &:hover{
        color: ${(props) => (props.primary ? V.textSecondary : V.textPrimary)};
        background-color: ${(props) => (props.primary ? V.bgSecondary : V.bgPrimary)};
    }

    *{
        padding-left:5px;
    }
`;


export const PreviousButton = styled(Button)`
width:60px;
height:60px;
border-radius:50%;
position:absolute;
left:20px;
bottom:20px;

svg:nth-child(n+1){
    padding:0 !important
}
`