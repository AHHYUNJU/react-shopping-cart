import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { Checkbox } from "@/shared/components/common/Checkbox/Checkbox";
import { Receipt } from "@/shared/components/receipt/Receipt/Receipt";
import { CartItemBox } from "../CartItemBox/CartItemBox";
import { TitleSection } from "@/shared/components/common/\bTitleSection/TitleSection";

import * as S from "./ShoppingCartContent.styles";

function ShoppingCartContent() {
  const {
    cartItemList,
    toggleAll,
    isAllChecked,
    getTotalPrice,
    shippingFee,
    toggleCheck,
    removeCartItem,
    updateCartItemQuantity,
  } = useCartItemContext();

  const totalPrice = getTotalPrice();
  const deliveryFee = shippingFee(totalPrice);

  return (
    <S.ShoppingCartContent>
      <S.CartHeader>
        <TitleSection
          title="장바구니"
          subTexts={[`현재 ${cartItemList.length}종류의 상품이 담겨있습니다.`]}
        />
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
      <S.ItemList>
        {cartItemList.length > 0 ? (
          cartItemList.map((item) => (
            <CartItemBox
              key={item.id}
              item={item}
              showCheckbox
              showDelete
              onToggleCheck={toggleCheck}
              onRemove={removeCartItem}
              onQuantityChange={updateCartItemQuantity}
            />
          ))
        ) : (
          <p>장바구니에 상품이 없습니다</p>
        )}
      </S.ItemList>
      <Receipt allProductPrice={totalPrice} shippingFee={deliveryFee} />
    </S.ShoppingCartContent>
  );
}

export { ShoppingCartContent };
