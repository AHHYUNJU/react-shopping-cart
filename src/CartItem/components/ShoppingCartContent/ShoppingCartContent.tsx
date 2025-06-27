import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { Checkbox } from "@/shared/component/Checkbox/Checkbox";
import { Hr } from "@/shared/component/Hr/Hr";
import { Receipt } from "@/shared/component/Receipt/Receipt";

import * as S from "./ShoppingCartContent.styles";

function ShoppingCartContent() {
  const {
    cartItemList,
    updateCartItemQuantity,
    removeCartItem,
    toggleAll,
    isAllChecked,
    toggleCheck,
    getTotalPrice,
    shippingFee,
  } = useCartItemContext();

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

      <S.ItemList>
        {Array.isArray(cartItemList) && cartItemList.length > 0 ? (
          cartItemList.map((item) => (
            <S.ItemBox>
              <Hr />
              <S.ItemToolbar>
                <Checkbox
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => {
                    toggleCheck(item.id);
                  }}
                ></Checkbox>
                <button onClick={() => removeCartItem(item.id)}>삭제</button>
              </S.ItemToolbar>
              <S.Item>
                <S.Image src={item.product.imageUrl} alt={item.product.name} />
                <S.Flex direction="column" gap="24px">
                  <S.Flex direction="column" gap="4px">
                    <S.Name>{item.product.name}</S.Name>
                    <S.Price>{item.product.price.toLocaleString()}원</S.Price>
                  </S.Flex>
                  <S.QuantityControl>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.cartQuantity - 1)
                      }
                    >
                      -
                    </button>
                    <p>{item.cartQuantity}</p>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.cartQuantity + 1)
                      }
                    >
                      +
                    </button>
                  </S.QuantityControl>
                </S.Flex>
              </S.Item>
            </S.ItemBox>
          ))
        ) : (
          <p>장바구니에 상품이 없습니다</p>
        )}
      </S.ItemList>
      <Receipt
        allProductPrice={getTotalPrice()}
        shippingFee={shippingFee(getTotalPrice())}
      />
    </S.ShoppingCartContent>
  );
}

export { ShoppingCartContent };
