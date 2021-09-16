import * as S from './style';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useContext } from 'react';
import { DataItemContext } from '../../../context/useDataItem';

const Badge = () => {
    const { buyItems } = useContext(DataItemContext);

    return(
        <S.Badge>
            <S.BadgeIcon>
                <ShoppingCartIcon />
            </S.BadgeIcon>
            <S.Counter>
                {buyItems}
            </S.Counter>
        </S.Badge>
    )
}
export default Badge;