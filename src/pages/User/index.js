import { Button } from '../../components/Button';
import { Container, Main } from '../../components/Container';
import * as S from './style';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useHistory } from 'react-router-dom';

export default function UserData(){
    const history = useHistory();

    return(
        <Container>
            <Main>
                <S.DataUser>
                    <S.InputUser id="standard-basic" label="Nome" primary/>
                    <S.Senha>
                        <p>Por favor, digite seu saldo:</p>
                        <S.InputSaldo type="number" id="standard-basic" label="R$"/>
                    </S.Senha>
                    
                </S.DataUser>
                <Button primary 
                onClick={() => history.push('/items')}
                >
                    Próximo <SkipNextIcon />
                </Button>
            </Main>
        </Container>
    )
}
