import "./App.css";
import "./styles/reset.css";
import { CartItemProvider } from "./CartItem/context/CartItemContext";
import { CouponProvider } from "./Coupon/context/CouponContext";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  return (
    <>
      <CartItemProvider>
        <CouponProvider>
          <ShoppingCartPage />
        </CouponProvider>
      </CartItemProvider>
    </>
  );
}

export default App;
