import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import { useReceipt } from "@/CartItem/hooks/useReceipt";
import { TitleSection } from "@/shared/components/common/\bTitleSection/TitleSection";

import * as S from "./PayCheckContent.styles";

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
      <TitleSection
        title="결제 확인"
        subTexts={[
          `총 ${selectedCartItemList.length}종류의 상품 ${totalQuantity}개를 주문했습니다.`,
          "최종 결제 금액을 확인해 주세요.",
        ]}
        align="center"
      />
      <S.PriceTitle>총 결제 금액</S.PriceTitle>
      <S.TotalPrice>{finalPrice.toLocaleString()}원</S.TotalPrice>
    </S.PayCheckContent>
  );
}

export { PayCheckContent };
