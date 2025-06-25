import { useState } from "react";
import { Hr } from "@/shared/component/Hr/Hr";
import { Price } from "@/shared/component/Price/Price";
import Info from "../../../assets/Info.png";
import { CouponModal } from "@/Coupon/ui/CouponModal/CouponModal";
import * as S from "./OrderCheckContent.styles";
import Shipping from "@/shared/component/Shipping/Shipping";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import { useReceipt } from "@/CartItem/hooks/useReceipt";

type Props = {
  selectedCartItemList: CartItemResponse[];
  isRemote: boolean;
  onRemoteChange: (checked: boolean) => void;
};

function OrderCheckContent({
  selectedCartItemList,
  isRemote,
  onRemoteChange,
}: Props) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const { totalQuantity, totalPrice, finalShippingFee, finalPayment } =
    useReceipt(selectedCartItemList, isRemote);

  return (
    <S.OrderCheckContent>
      <S.CartHeader>
        <S.Title>주문 확인</S.Title>
        <S.SubText>
          <S.SubText>
            <span>
              총 {selectedCartItemList.length}종류의 상품 {totalQuantity}개를
              주문합니다.
            </span>
            <span>최종 결제 금액을 확인해 주세요.</span>
          </S.SubText>
        </S.SubText>
      </S.CartHeader>
      <S.ItemList>
        {Array.isArray(selectedCartItemList) &&
        selectedCartItemList.length > 0 ? (
          selectedCartItemList.map((item) => (
            <S.ItemBox key={item.id}>
              <Hr />
              <S.Item>
                <S.Image src={item.product.imageUrl} alt={item.product.name} />
                <S.Info>
                  <S.Flex direction="column" gap="4px">
                    <S.Name>{item.product.name}</S.Name>
                    <S.Price>{item.product.price.toLocaleString()}원</S.Price>
                  </S.Flex>
                  <S.Quantity>{item.cartQuantity}개</S.Quantity>
                </S.Info>
              </S.Item>
            </S.ItemBox>
          ))
        ) : (
          <p>장바구니에 상품이 없습니다</p>
        )}
      </S.ItemList>
      <S.CouponApplyButton onClick={() => setIsCouponModalOpen(true)}>
        쿠폰 적용
      </S.CouponApplyButton>
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
      ></CouponModal>
      <Shipping isRemote={isRemote} onRemoteChange={onRemoteChange} />
      <S.ReceiptWrapper>
        <S.ShippingInfo>
          <S.Img src={Info} />
          <S.Description>
            총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.
          </S.Description>
        </S.ShippingInfo>
        <Hr />
        <S.Receipt>
          <Price name="주문 금액" price={totalPrice} />
          <Price name="쿠폰 할인 금액" price={0} />
          <Price name="배송비" price={finalShippingFee} />
          <Hr />
          <Price name="총 결제 금액" price={finalPayment} />
        </S.Receipt>
      </S.ReceiptWrapper>
    </S.OrderCheckContent>
  );
}

export { OrderCheckContent };
