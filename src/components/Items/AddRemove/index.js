import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useEffect, useState } from 'react';
import * as S from './style';

import { useContext } from 'react';
import { DataItemContext } from 'context/useDataItem';

const AddRemoveItem = ({priceItem}) => {
    const { setBuyItems, setTotalValue } = useContext(DataItemContext);

    const [counter, setCounter] = useState(0);
    const [tempValue, setTempValue] = useState(0);

    useEffect(() => {
        setTotalValue((previousState) => (previousState+tempValue))
    }, [counter]) //eslint-disable-line
    return(
        <S.Container>
            <S.ButtonItem
            onClick={
                () => {
                    if(counter > 0){
                        setCounter(counter-1);
                        setBuyItems((previousState) => (previousState-1));
                        setTempValue(priceItem*-1);
                    }
                }
            }

            ><RemoveIcon /></S.ButtonItem>
            
            {counter}
            <S.ButtonItem
            onClick={
                () => {
                    if(counter >=0){
                        setCounter(counter+1);
                        setBuyItems((previousState) => (previousState+1));
                        setTempValue(priceItem);
                    }
                }
            }
            ><AddIcon /></S.ButtonItem>
        </S.Container>
    )
}

export default AddRemoveItem;