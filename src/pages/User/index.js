import { Button } from "components/Button";
import { Container, Main } from "components/Container";
import * as S from "./style";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useHistory } from "react-router-dom";
import { UserContext } from "context/useDataUser";
import { useContext, useState } from "react";
import { Alert, CloseAlert } from "components/Alert";
import {ReactComponent as CloseIcon } from "assets/icons/close_icon.svg";

const UserData = () => {
  const history = useHistory();
  const { name, setName, balance, setBalance } = useContext(UserContext);
  const [alert, setAlert] = useState(false);

  return (
    <Container>
      
      {
      alert ? 
      (
      <Alert>
        <h2>Warning</h2>
        <p>Some textField is empty, change it</p>
        
          <CloseAlert onClick={() => {setAlert(!Alert)}}><CloseIcon /></CloseAlert>
        
      </Alert>) 
      
      :  (<Main>
        <S.DataUser>
          <S.InputUser
            id="standard-basic"
            label="Name"
            primary
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <S.Senha>
            <p>Your balance: </p>
            <S.InputSaldo
              type="number"
              id="standard-basic"
              label="US$"
              onChange={(e) => {
                setBalance(e.target.value);
              }}
            />
            
          </S.Senha>
        </S.DataUser>
        <Button primary onClick={() => 
        {
          if(name.length !== 0 && balance.length > 0){
            history.push("/items")
          }else{
            setAlert(true);
          }
        }}>
          Next Page <SkipNextIcon />
        </Button>
        </Main>) 
      }
      
     
    </Container>
  );
};

export default UserData;
