import styled from 'styled-components';

export const ContainerFruit = styled.article`
  position:relative;
  display:grid;
  grid-template-columns: 100px 1fr;
  width:48%;
  
 
  border:1px solid red;
  * {
      
      text-align:center;
  }
  

@media (max-width:930px){
    width:90%;
}
@media(max-width:530px){
    grid-template-columns: 1fr;
    padding-bottom:40px;
}
`;


export const ItemData = styled.section`
display:flex;
padding:0 20px;
flex-direction:column;
justify-content:start;
align-items:center;

div {
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;

}
@media (max-width:730px){
    flex-direction: row;
    justify-content: space-between;
    align-items:start;
}
@media (max-width:530px){
    flex-direction:column;
    align-items:center;
}`


