import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { CouponModal } from "@/Coupon/ui/CouponModal/CouponModal";
import { CouponContext } from "@/Coupon/context/CouponContext";
import { ErrorProvider } from "@/shared/context/ErrorContext";
import { CouponResponse } from "@/Coupon/types/CouponResponse";
import { CartItemResponse } from "@/CartItem/types/CartItemResponse";

const mockCartItems: CartItemResponse[] = [
  {
    id: 1,
    cartQuantity: 3,
    product: {
      id: 9,
      name: "주렁",
      price: 99,
      imageUrl: "",
      category: "전체",
      stockQuantity: 999,
    },
    isChecked: true,
  },
];

const mockCoupons: CouponResponse[] = [
  {
    id: 1,
    code: "FIX100",
    description: "Fixed 100",
    discountType: "fixed",
    discount: 100,
    minimumAmount: 500,
    expirationDate: "2025-12-31",
  },
  {
    id: 2,
    code: "FREE5",
    description: "Free Shipping",
    discountType: "freeShipping",
    minimumAmount: 0,
    expirationDate: "2025-12-31",
  },
];

describe("CouponModal", () => {
  const onClose = vi.fn();
  const onDiscountChange = vi.fn();

  const renderCouponModal = (isOpen: boolean) =>
    render(
      <ErrorProvider>
        <CouponContext.Provider
          value={{
            couponList: mockCoupons,
            checkedCoupons: [],
            setCouponList: vi.fn(),
            setCheckedCoupons: vi.fn(),
          }}
        >
          <CouponModal
            isOpen={isOpen}
            onClose={onClose}
            allProductPrice={10000}
            cartItems={mockCartItems}
            shippingFee={3000}
            onDiscountChange={onDiscountChange}
          />
        </CouponContext.Provider>
      </ErrorProvider>
    );

  it("isOpen이 false일 경우 아무것도 렌더링되지 않는다", () => {
    const { container } = renderCouponModal(false);
    expect(container).toBeEmptyDOMElement();
  });

  it("isOpen이 true이면 쿠폰 목록이 렌더링된다", () => {
    renderCouponModal(true);

    expect(screen.getByText("쿠폰을 선택해 주세요")).toBeInTheDocument();
    expect(screen.getByText("Fixed 100")).toBeInTheDocument();
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();
  });
});
