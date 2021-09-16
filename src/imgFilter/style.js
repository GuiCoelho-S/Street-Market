import styled from 'styled-components'

export const Image = styled.img`
width:90%;
border-radius:12px;
border:1px solid green;
transform:translate(10px, 10px);

@media (max-width:530px){
    width:80%;
    align-self:center;
    margin:20px auto;
    transform:none;
}
`