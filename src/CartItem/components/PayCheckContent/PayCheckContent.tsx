import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import * as S from "./PayCheckContent.styles";

function PayCheckContent() {
  const { cartItemList } = useCartItemContext();
  const totalQuantity = cartItemList.reduce(
    (acc, item) => acc + item.cartQuantity,
    0
  );
  return (
    <S.PayCheckContent>
      <S.Title>결제 확인</S.Title>
      <S.SubText>
        <span>
          총 {cartItemList.length}종류의 상품 {totalQuantity}개를 주문했습니다.
        </span>
        <span>최종 결제 금액을 확인해 주세요.</span>
      </S.SubText>
      <S.PriceTitle>총 결제 금액</S.PriceTitle>
      <S.TotalPrice>7,--원</S.TotalPrice>
    </S.PayCheckContent>
  );
}
export { PayCheckContent };
