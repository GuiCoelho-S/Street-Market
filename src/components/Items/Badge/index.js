import { memo, useState } from 'react';
import * as S from './style';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Badge (){
    const number = useState(0);

    return(
        <S.Badge>
            <S.BadgeIcon>
                <ShoppingCartIcon />
            </S.BadgeIcon>
            <S.Counter>
                {number}
            </S.Counter>
        </S.Badge>
    )
}
export default memo(Badge);