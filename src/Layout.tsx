import "./App.css";
import "./styles/reset.css";
import { Outlet } from "react-router";
import { CartItemProvider } from "./CartItem/context/CartItemContext";
import { CouponProvider } from "./Coupon/context/CouponContext";

function Layout() {
  return (
    <>
      <CartItemProvider>
        <CouponProvider>
          <Outlet />
        </CouponProvider>
      </CartItemProvider>
    </>
  );
}

export { Layout };
