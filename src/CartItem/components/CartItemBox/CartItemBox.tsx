import { Hr } from "@/shared/components/common/Hr/Hr";
import { Checkbox } from "@/shared/components/common/Checkbox/Checkbox";
import { Flex } from "@/shared/components/common/Flex";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";

import * as S from "./CartItemBox.styles";

type CartItemProps = {
  item: CartItemResponse;
  readOnly?: boolean;
  showCheckbox?: boolean;
  showDelete?: boolean;
  onToggleCheck?: (id: number) => void;
  onRemove?: (id: number) => void;
  onQuantityChange?: (id: number, quantity: number) => void;
};

function CartItemBox({
  item,
  readOnly = false,
  showCheckbox,
  showDelete,
  onToggleCheck,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  return (
    <S.ItemBox key={item.id}>
      <Hr />
      {showCheckbox || showDelete ? (
        <S.ItemToolbar>
          <Checkbox
            type="checkbox"
            checked={item.isChecked}
            onChange={() => onToggleCheck?.(item.id)}
          ></Checkbox>
          <button onClick={() => onRemove?.(item.id)}>삭제</button>
        </S.ItemToolbar>
      ) : null}

      <S.Item>
        <S.Image src={item.product.imageUrl} alt={item.product.name} />
        <Flex direction="column" gap="24px">
          <Flex direction="column" gap="4px">
            <S.Name>{item.product.name}</S.Name>
            <S.Price>{item.product.price.toLocaleString()}원</S.Price>
          </Flex>
          {readOnly ? (
            <S.Quantity>{item.cartQuantity}개</S.Quantity>
          ) : (
            <S.QuantityControl>
              <button
                onClick={() =>
                  onQuantityChange?.(item.id, item.cartQuantity - 1)
                }
              >
                -
              </button>
              <p>{item.cartQuantity}</p>
              <button
                onClick={() =>
                  onQuantityChange?.(item.id, item.cartQuantity + 1)
                }
              >
                +
              </button>
            </S.QuantityControl>
          )}
        </Flex>
      </S.Item>
    </S.ItemBox>
  );
}

export { CartItemBox };
