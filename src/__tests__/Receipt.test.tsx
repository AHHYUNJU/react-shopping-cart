import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { ErrorProvider } from "../shared/context/ErrorContext.tsx";
import { Receipt } from "@/shared/components/receipt/Receipt/Receipt.tsx";

describe("Receipt", () => {
  it("주문 금액이 100,000원 미만인 경우 배송비는 3,000원으로 설정된다.", () => {
    const allProductPrice = 10000;
    const shippingFee = allProductPrice < 100000 ? 3000 : 0;

    render(
      <MemoryRouter>
        <ErrorProvider>
          <Receipt
            allProductPrice={allProductPrice}
            shippingFee={shippingFee}
          />
        </ErrorProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("3,000원")).toBeInTheDocument();
  });

  it("주문 금액이 100,000원 이상인 경우 배송비는 0원으로 설정된다.", () => {
    const allProductPrice = 100000;
    const shippingFee = allProductPrice < 100000 ? 3000 : 0;

    render(
      <MemoryRouter>
        <ErrorProvider>
          <Receipt
            allProductPrice={allProductPrice}
            shippingFee={shippingFee}
          />
        </ErrorProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("0원")).toBeInTheDocument();
  });
});
