import { Info } from "../Info/Info";
import { Hr } from "../Hr/Hr";
import { Price } from "../Price/Price";
import { DetailPrice } from "../DetailPrice/DetailPrice";

import * as S from "./Receipt.styles";

type ReceiptProps = {
  allProductPrice: number;
  shippingFee: number;
  couponDiscount?: number;
  showCouponDiscount?: boolean;
};

function Receipt({
  allProductPrice,
  shippingFee,
  couponDiscount = 0,
  showCouponDiscount = false,
}: ReceiptProps) {
  const totalPrice = allProductPrice + shippingFee - couponDiscount;

  return (
    <S.ReceiptWrapper>
      <Info message="총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다." />
      <Hr />
      <DetailPrice
        allProductPrice={allProductPrice}
        couponDiscount={couponDiscount}
        shippingFee={shippingFee}
        showCouponDiscount={showCouponDiscount}
      />
      <Hr />
      <Price name="총 결제 금액" price={totalPrice} />
    </S.ReceiptWrapper>
  );
}
export { Receipt };
