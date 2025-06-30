import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ShoppingCartPage } from "@/pages/ShoppingCartPage/ShoppingCartPage";
import useCartItemList from "@/CartItem/hooks/useCartItemList";
import { CartItemProvider } from "@/CartItem/context/CartItemProvider";

vi.mock("@/CartItem/hooks/useCartItemList", () => ({
  __esModule: true,
  default: vi.fn(),
}));
vi.mock("@/shared/context/ErrorContext", () => ({
  __esModule: true,
  useErrorContext: () => ({ errorMessage: "" }),
}));
vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock("@/CartItem/services/getCartItem", () => ({
  __esModule: true,
  getCartItem: vi.fn(() =>
    Promise.resolve({
      content: [],
    })
  ),
}));

describe("ShoppingCartPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("로딩 중이면 '로딩중..' 텍스트를 보여준다", () => {
    const mockedUseCartItemList = useCartItemList as ReturnType<typeof vi.fn>;

    mockedUseCartItemList.mockReturnValue({
      state: {
        isLoading: true,
        isFetching: false,
        isSuccess: false,
        isFail: false,
      },
      cartItemList: [],
      patchCartItem: vi.fn(),
      deleteCartItem: vi.fn(),
    });

    render(
      <CartItemProvider>
        <ShoppingCartPage />
      </CartItemProvider>
    );

    expect(screen.getByText("로딩 중...")).toBeInTheDocument();
  });
});

//   it("로딩 중이면 '로딩중..' 텍스트를 보여준다", () => {
//     mockUseCartItemList.mockReturnValue({
//       state: { isLoading: true },
//       cartItemList: [],
//     });

//     mockUseErrorContext.mockReturnValue({
//       errorMessage: "",
//       handleErrorMessage: vi.fn(),
//     });

//     renderWithRouter(<OrderCheckPage />, {
//       selectedCartItemList: mockSelectedCartItemList,
//     });

//     expect(screen.getByText("로딩중..")).toBeInTheDocument();
//   });

//   it("로딩이 끝나면 OrderListContent를 보여준다", () => {
//     mockUseCartItemList.mockReturnValue({
//       state: { isLoading: false },
//       cartItemList: [{ id: 1, quantity: 2, product: { price: 1000 } }],
//     });

//     mockUseErrorContext.mockReturnValue({
//       errorMessage: "",
//       handleErrorMessage: vi.fn(),
//     });

//     renderWithRouter(<OrderCheckPage />, {
//       selectedCartItemList: mockSelectedCartItemList,
//     });

//     expect(screen.getByTestId("order-content")).toBeInTheDocument();
//   });

//   it("에러 메시지가 있으면 ErrorBox를 보여준다", () => {
//     mockUseCartItemList.mockReturnValue({
//       state: { isLoading: false },
//       cartItemList: [],
//     });

//     mockUseErrorContext.mockReturnValue({
//       errorMessage: "something went wrong",
//       handleErrorMessage: vi.fn(),
//     });

//     renderWithRouter(<OrderCheckPage />, {
//       selectedCartItemList: mockSelectedCartItemList,
//     });

//     expect(screen.getByTestId("error-box")).toBeInTheDocument();
//   });
// });
