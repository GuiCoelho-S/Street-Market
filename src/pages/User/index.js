import { Button } from "../../components/Button";
import { Container, Main } from "../../components/Container";
import * as S from "./style";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/useDataUser";
import { useContext } from "react";

const UserData = () => {
  const history = useHistory();
  const { setName,  setBalance } = useContext(UserContext);


  return (
    <Container>
      <Main>
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
        <Button primary onClick={() => history.push("/items")}>
          Next Page <SkipNextIcon />
        </Button>
      </Main>
    </Container>
  );
};

export default UserData;
