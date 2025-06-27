import "./App.css";
import "./styles/reset.css";
import { Outlet } from "react-router";
import { CartItemProvider } from "./CartItem/context/CartItemProvider";
import { CouponProvider } from "./Coupon/context/CouponContext";
import { ErrorProvider } from "./shared/context/ErrorContext";

function Layout() {
  return (
    <>
      <ErrorProvider>
        <CartItemProvider>
          <CouponProvider>
            <Outlet />
          </CouponProvider>
        </CartItemProvider>
      </ErrorProvider>
    </>
  );
}

export { Layout };
