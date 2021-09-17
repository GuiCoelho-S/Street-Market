import AddRemoveItem from "../AddRemove";
import ImageFilter from "imgFilter/imageFilter.js";

import * as S from "./style";

const ItemFruit = ({ value, name, title }) => {
  var price = value;

  return (
    <S.ContainerFruit>
      {ImageFilter(name)}

      <S.ItemData>
        <p>{title}</p>
        <div>
          <p>Single Price (kg): </p>
          <p>US$ {price}</p>
        </div>
      </S.ItemData>
      <AddRemoveItem priceItem={price} />
    </S.ContainerFruit>
  );
};

export default ItemFruit;
