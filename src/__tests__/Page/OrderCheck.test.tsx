import React from "react";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { OrderCheckPage } from "@/pages/OrderCheckPage/OrderCheckPage";
import useCartItemList from "@/CartItem/hooks/useCartItemList";
import { useErrorContext } from "@/shared/context/ErrorContext";
import { CouponProvider } from "@/Coupon/context/CouponContext";

vi.mock("@/CartItem/hooks/useCartItemList", () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock("@/shared/context/ErrorContext", () => ({
  __esModule: true,
  useErrorContext: vi.fn(),
}));

vi.mock("@/components/OrderList/OrderListContent/OrderListContent", () => ({
  __esModule: true,
  default: () => <div data-testid="order-content" />,
}));

vi.mock("@/components/common/ErrorBox/ErrorBox", () => ({
  __esModule: true,
  default: () => <div data-testid="error-box" />,
}));

vi.mock("@/components/layout/Header/Header", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <header>{children}</header>
  ),
}));

vi.mock("@/components/layout/Header/BackButton", () => ({
  __esModule: true,
  default: () => <button data-testid="back-button">Back</button>,
}));

vi.mock("@/Coupon/services/getCoupon", () => ({
  __esModule: true,
  getCoupon: vi.fn(() => Promise.resolve([])),
}));

describe("OrderCheckPage", () => {
  const mockedUseCartItemList = useCartItemList as ReturnType<typeof vi.fn>;
  const mockedUseErrorContext = useErrorContext as ReturnType<typeof vi.fn>;

  const mockSelectedCartItemList = [
    { id: 1, quantity: 2, isChecked: true },
    { id: 2, quantity: 1, isChecked: true },
  ];

  const renderWithRouter = (ui: React.ReactNode, state: unknown = {}) =>
    render(
      <MemoryRouter initialEntries={[{ pathname: "/order-check", state }]}>
        <CouponProvider> {ui}</CouponProvider>
      </MemoryRouter>
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("로딩 중이면 '로딩중..' 텍스트를 보여준다", () => {
    mockedUseCartItemList.mockReturnValue({
      state: { isLoading: true },
      cartItemList: [],
    });
    mockedUseErrorContext.mockReturnValue({
      errorMessage: "",
      handleErrorMessage: vi.fn(),
    });

    renderWithRouter(<OrderCheckPage />, {
      selectedCartItemList: mockSelectedCartItemList,
    });

    expect(screen.getByText("로딩 중...")).toBeInTheDocument();
  });

  it("로딩이 끝나면 OrderCheckContent를 보여준다", () => {
    const mockSelectedCartItemList = [
      {
        id: 1,
        cartQuantity: 2,
        product: {
          price: 1000,
          name: "테스트 상품",
          imageUrl: "test.jpg",
        },
      },
    ];

    mockedUseCartItemList.mockReturnValue({
      state: { isLoading: false },
      cartItemList: mockSelectedCartItemList,
    });

    mockedUseErrorContext.mockReturnValue({
      errorMessage: "",
      handleErrorMessage: vi.fn(),
    });

    renderWithRouter(<OrderCheckPage />, {
      selectedCartItemList: mockSelectedCartItemList,
    });

    expect(screen.getByTestId("order-check")).toBeInTheDocument();
  });

  it("에러 메시지가 있으면 ErrorBox를 보여준다", () => {
    const mockSelectedCartItemList = [
      {
        id: 1,
        cartQuantity: 2,
        product: {
          price: 1000,
          name: "테스트 상품",
          imageUrl: "test.jpg",
        },
      },
    ];

    mockedUseCartItemList.mockReturnValue({
      state: { isLoading: false },
      cartItemList: mockSelectedCartItemList,
    });
    mockedUseErrorContext.mockReturnValue({
      errorMessage: "something went wrong",
      handleErrorMessage: vi.fn(),
    });

    renderWithRouter(<OrderCheckPage />, {
      selectedCartItemList: mockSelectedCartItemList,
    });

    expect(screen.getByTestId("error-box")).toBeInTheDocument();
  });
});
