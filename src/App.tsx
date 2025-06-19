import "./App.css";
import { CouponProvider } from "./Coupon/context/CouponContext";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  return (
    <>
      <CouponProvider>
        <ShoppingCartPage />
      </CouponProvider>
    </>
  );
}

export default App;
