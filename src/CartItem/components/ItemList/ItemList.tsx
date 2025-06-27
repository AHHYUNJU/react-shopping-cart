import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { Hr } from "@/shared/components/Hr/Hr";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";

import * as S from "./ItemList.styles";

function ItemList() {
  const { cartItemList, updateCartItemQuantity, removeCartItem, toggleCheck } =
    useCartItemContext();

  return (
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
  );
}

export { ItemList };
