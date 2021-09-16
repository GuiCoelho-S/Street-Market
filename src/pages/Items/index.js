import { Container } from "../../components/Container";
import * as S from "./style";
import Badge from "../../components/Items/Badge";
import ItemFruit from "../../components/Items/ItemFruit";
import { useContext } from "react";
import { Button, PreviousButton } from "../../components/Button";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../context/useDataUser";
import { DataItemContext } from "../../context/useDataItem";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { dataObject } from '../../data/informations'

const Items = () => {

  const history = useHistory();
  
  const { name, balance } = useContext(UserContext);

  const { totalValue } = useContext(DataItemContext);

  let totalValueF = totalValue.toFixed(2);

    

  return (
    <Container>
      <S.ContainerItens>
        <S.UserData>
          <h1>Hi, {name}</h1>
          <h3>Balance: US$ {balance}</h3>
        </S.UserData>
        <S.UserData>
          <S.TotalValue>
            <p>Total value:</p>
            <p>US$ {totalValueF}</p>
          </S.TotalValue>
          <Badge />
        </S.UserData>
        <S.ListFruit>
          {
              dataObject.map((object) => {
                return <ItemFruit key={object.id} value={object.price} name={object.name} title={object.title}/>
              })
          }
        </S.ListFruit>
        <PreviousButton
        onClick={() => {history.push("/")}}>
          <ArrowBackIcon />
        </PreviousButton>
        <Button
        onClick={
          () => {
            if(totalValue > balance){
              alert("The amount is above your balance, please take out some items. ");
          }
            if(totalValue <= balance){
              history.push("/pay");
            }
          }
        }>Next page</Button>

      </S.ContainerItens>
      <S.emptyDiv />
    </Container>
  );
};

export default Items;
