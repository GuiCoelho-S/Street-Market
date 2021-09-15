import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const DataUser = styled.article`
  width:100%;
  height:auto;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;


`;

export const InputUser = styled(TextField)`
width:clamp(240px, 60%, 450px);

`;

export const Senha = styled.div`
display:flex;
align-items:flex-end;
justify-content: space-evenly;
padding:10px 0;
p {
  margin-bottom: 4px;

}
@media (max-width:400px){
  flex-direction:column;
  align-items:center;
}
`

export const InputSaldo = styled(TextField)`
width:30%;
`