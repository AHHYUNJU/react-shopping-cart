import { useState } from "react";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { CouponModal } from "@/Coupon/ui/CouponModal/CouponModal";

function ShoppingCartPage() {
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

  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  return (
    <>
      <Header />
      <input
        type="checkbox"
        checked={isAllChecked}
        onChange={toggleAll}
      ></input>
      {Array.isArray(cartItemList) && cartItemList.length > 0 ? (
        cartItemList.map((item) => (
          <>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => {
                toggleCheck(item.id);
              }}
            />
            <div key={item.id}>
              {item.product.name}, 수량 :{item.cartQuantity}, 금액:
              {item.product.price}
            </div>
            <button
              onClick={() =>
                updateCartItemQuantity(item.id, item.cartQuantity - 1)
              }
            >
              -
            </button>
            <button
              onClick={() =>
                updateCartItemQuantity(item.id, item.cartQuantity + 1)
              }
            >
              +
            </button>
            <button onClick={() => removeCartItem(item.id)}>삭제</button>
          </>
        ))
      ) : (
        <p>장바구니에 상품이 없습니다</p>
      )}
      <button onClick={() => setIsCouponModalOpen(true)}>쿠폰 적용</button>
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
      ></CouponModal>
      <p>주문 금액: {getTotalPrice().toLocaleString()}원</p>
      <p>배송비: {shippingFee(getTotalPrice()).toLocaleString()}원</p>
      <p>총 주문 금액: {getTotalPrice() + shippingFee(getTotalPrice())}원</p>
      <Footer />
    </>
  );
}

export { ShoppingCartPage };
