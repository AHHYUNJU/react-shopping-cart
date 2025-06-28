import { useEffect } from "react";
import { CouponModal } from "@/Coupon/ui/CouponModal/CouponModal";
import { Shipping } from "@/shared/components/receipt/Shipping/Shipping";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";
import { useReceipt } from "@/CartItem/hooks/useReceipt";
import { useCouponModal } from "@/Coupon/hooks/useCouponModal";
import { Receipt } from "@/shared/components/receipt/Receipt/Receipt";
import { CartItemBox } from "../CartItemBox/CartItemBox";
import { TitleSection } from "@/shared/components/common/\bTitleSection/TitleSection";

import * as S from "./OrderCheckContent.styles";

type Props = {
  selectedCartItemList: CartItemResponse[];
  isRemote: boolean;
  onRemoteChange: (checked: boolean) => void;
  onDiscountChange: (amount: number) => void;
  onFinalPriceChange: (price: number) => void;
};

function OrderCheckContent({
  selectedCartItemList,
  isRemote,
  onRemoteChange,
  onDiscountChange,
  onFinalPriceChange,
}: Props) {
  const { totalQuantity, totalPrice, finalShippingFee } = useReceipt(
    selectedCartItemList,
    isRemote
  );
  const {
    isOpen: isCouponModalOpen,
    open: openCouponModal,
    close: closeCouponModal,
    discount: couponDiscount,
    applyDiscount,
  } = useCouponModal();

  useEffect(() => {
    const finalPrice = totalPrice + finalShippingFee - couponDiscount;
    onDiscountChange(couponDiscount);
    onFinalPriceChange(finalPrice);
  }, [couponDiscount, totalPrice, finalShippingFee]);

  return (
    <S.OrderCheckContent>
      <S.CartHeader>
        <TitleSection
          title="주문 확인"
          subTexts={[
            `총 ${selectedCartItemList.length}종류의 상품 ${totalQuantity}개를 주문합니다.`,
            "최종 결제 금액을 확인해 주세요.",
          ]}
        />
      </S.CartHeader>

      <S.ItemList>
        {selectedCartItemList.length > 0 ? (
          selectedCartItemList.map((item) => (
            <CartItemBox key={item.id} item={item} readOnly />
          ))
        ) : (
          <p>장바구니에 상품이 없습니다</p>
        )}
      </S.ItemList>

      <S.CouponApplyButton onClick={() => openCouponModal()}>
        쿠폰 적용
      </S.CouponApplyButton>
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => closeCouponModal()}
        allProductPrice={totalPrice}
        cartItems={selectedCartItemList}
        shippingFee={finalShippingFee}
        onDiscountChange={applyDiscount}
      ></CouponModal>
      <Shipping isRemote={isRemote} onRemoteChange={onRemoteChange} />
      <Receipt
        allProductPrice={totalPrice}
        shippingFee={finalShippingFee}
        couponDiscount={couponDiscount}
        showCouponDiscount={true}
      />
    </S.OrderCheckContent>
  );
}

export { OrderCheckContent };
