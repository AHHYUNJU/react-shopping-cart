import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { useCartItem } from "@/CartItem/hooks/useCartItem";

const ShoppingCartPage = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeCartItem,
    toggleAll,
    isAllChecked,
    toggleCheck,
  } = useCartItem();

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
                console.log(
                  `${item.product.name}의 체크 상태:`,
                  !item.isChecked
                );
              }}
            />
            <div key={item.id}>
              {item.product.name}, 수량 :{item.cartQuantity}
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

      <Footer />
    </>
  );
};

export { ShoppingCartPage };
