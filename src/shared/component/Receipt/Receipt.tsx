import * as S from "./Receipt.styles";
import Info from "../../../assets/Info.png";
import { Hr } from "../Hr/Hr";
import { Price } from "../Price/Price";
import { DetailPrice } from "../DetailPrice/DetailPrice";

type ReceiptProps = {
  allProductPrice: number;
  shippingFee: number;
  couponDiscount?: number;
};

function Receipt({
  allProductPrice,
  shippingFee,
  couponDiscount = 0,
}: ReceiptProps) {
  return (
    <S.ReceiptWrapper>
      <S.ShippingInfo>
        <S.Img src={Info} />
        <S.Description>
          총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.
        </S.Description>
      </S.ShippingInfo>
      <Hr />
      <S.Receipt>
        <DetailPrice
          allProductPrice={allProductPrice}
          couponDiscount={couponDiscount}
          shippingFee={shippingFee}
        />
        <Hr />
        <Price
          name="총 결제 금액"
          price={allProductPrice + shippingFee - couponDiscount}
        />
      </S.Receipt>
    </S.ReceiptWrapper>
  );
}
export { Receipt };
