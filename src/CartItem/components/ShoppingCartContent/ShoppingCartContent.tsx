import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { Checkbox } from "@/shared/components/common/Checkbox/Checkbox";
import { Receipt } from "@/shared/components/receipt/Receipt/Receipt";
import { ItemList } from "../ItemList/ItemList";

import * as S from "./ShoppingCartContent.styles";

function ShoppingCartContent() {
  const { cartItemList, toggleAll, isAllChecked, getTotalPrice, shippingFee } =
    useCartItemContext();

  const totalPrice = getTotalPrice();
  const deliveryFee = shippingFee(totalPrice);

  return (
    <S.ShoppingCartContent>
      <S.CartHeader>
        <S.Title>장바구니</S.Title>
        <S.SubText>
          현재 {cartItemList.length}종류의 상품이 담겨있습니다.
        </S.SubText>
      </S.CartHeader>
      <S.CheckWrapper>
        <Checkbox
          id="check-all"
          type="checkbox"
          checked={isAllChecked}
          onChange={toggleAll}
        />
        <label htmlFor="check-all">전체 선택</label>
      </S.CheckWrapper>
      <ItemList />
      <Receipt allProductPrice={totalPrice} shippingFee={deliveryFee} />
    </S.ShoppingCartContent>
  );
}

export { ShoppingCartContent };
