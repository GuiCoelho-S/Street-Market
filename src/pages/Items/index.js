import { Container } from "../../components/Container";
import * as S from './style';
import Badge from '../../components/Items/Badge';
export default function Items (){

    return(
        <Container>
            <S.ContainerItens>
                <S.UserData>
                    <h1>Olá, Guilherme Coelho</h1>
                    <h3>Saldo: R$ 100,00</h3>
                </S.UserData>
                <S.UserData>
                <S.TotalValue><p>Valor total:</p><p>R$ 5300,50</p></S.TotalValue>
                <Badge />
                </S.UserData>
                <S.ListFruit>

                </S.ListFruit>
            </S.ContainerItens>
        </Container>
    )
}