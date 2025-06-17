import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { useCartItem } from "@/CartItem/hooks/useCartItem";

const ShoppingCartPage = () => {
  const { cartItems } = useCartItem();

  return (
    <>
      <Header />
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            {item.id}({item.quantity})
          </div>
        ))
      ) : (
        <p>장바구니에 상품이 없습니다</p>
      )}

      <Footer />
    </>
  );
};

export { ShoppingCartPage };
