import * as S from './style';
import { ReactComponent as MarketIcon } from "../../assets/icons/market_icon.svg";

export default function Header(){

    return(
        <S.Header>
            <S.Title>Street Market</S.Title>
            <S.Icon><MarketIcon /></S.Icon>
        </S.Header>
    )
}