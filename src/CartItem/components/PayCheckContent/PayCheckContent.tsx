import * as S from "./PayCheckContent.styles";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import { useReceipt } from "@/CartItem/hooks/useReceipt";

type Props = {
  selectedCartItemList: CartItemResponse[];
  isRemote: boolean;
  finalPrice: number;
};

function PayCheckContent({
  selectedCartItemList,
  isRemote,
  finalPrice,
}: Props) {
  const { totalQuantity } = useReceipt(selectedCartItemList, isRemote);

  return (
    <S.PayCheckContent>
      <S.Title>결제 확인</S.Title>
      <S.SubText>
        <span>
          총 {selectedCartItemList.length}종류의 상품 {totalQuantity}개를
          주문했습니다.
        </span>
        <span>최종 결제 금액을 확인해 주세요.</span>
      </S.SubText>
      <S.PriceTitle>총 결제 금액</S.PriceTitle>
      <S.TotalPrice>{finalPrice.toLocaleString()}원</S.TotalPrice>
    </S.PayCheckContent>
  );
}

export { PayCheckContent };
