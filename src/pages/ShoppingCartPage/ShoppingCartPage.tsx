import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { useCartItem } from "@/CartItem/hooks/useCartItem";
import { useCoupon } from "@/Coupon/hooks/useCoupon";

const ShoppingCartPage = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeCartItem,
    toggleAll,
    isAllChecked,
    toggleCheck,
    getTotalPrice,
    shippingFee,
  } = useCartItem();

  const { coupon } = useCoupon();
  return (
    <>
      <Header />
      <input
        type="checkbox"
        checked={isAllChecked}
        onChange={toggleAll}
      ></input>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item) => (
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
      <button>쿠폰 적용</button>
      {coupon.length > 0 ? (
        <ul>
          {coupon.map((c) => (
            <li key={c.id}>{c.code}</li>
          ))}
        </ul>
      ) : (
        <p>사용 가능한 쿠폰이 없습니다</p>
      )}
      <p>주문 금액: {getTotalPrice().toLocaleString()}원</p>
      <p>배송비: {shippingFee(getTotalPrice()).toLocaleString()}원</p>
      <p>총 주문 금액: {getTotalPrice() + shippingFee(getTotalPrice())}원</p>
      <Footer />
    </>
  );
};

export { ShoppingCartPage };
