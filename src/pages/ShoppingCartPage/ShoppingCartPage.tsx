import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { useCartItem } from "@/CartItem/hooks/useCartItem";

const ShoppingCartPage = () => {
  const { cartItems, updateCartItemQuantity } = useCartItem();

  return (
    <>
      <Header />
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <>
            <div key={item.id}>
              {item.product.name}({item.cartQuantity})
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
