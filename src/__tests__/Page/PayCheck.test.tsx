import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, it, expect } from "vitest";

import { PayCheckPage } from "@/pages/PayCheckPage/PayCheckPage";

describe("PaymentConfirmPage", () => {
  it("state 없이 접근하면 오류 메시지를 보여준다", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/order-check",
          element: <PayCheckPage />,
        },
      ],
      {
        initialEntries: ["/order-check"],
      }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText("잘못된 접근입니다.")).toBeInTheDocument();
    expect(
      screen.getByText(
        /장바구니에서 상품을 선택한 후에만 주문 확인 페이지를 볼 수 있습니다\./
      )
    ).toBeInTheDocument();
  });

  it("state와 함께 접근하면 결제 정보를 올바르게 보여준다", () => {
    const state = {
      selectedCartItemList: [
        {
          id: 1,
          cartQuantity: 2,
          product: {
            price: 1000,
            name: "테스트 상품",
            imageUrl: "img.jpg",
          },
        },
      ],
      isRemote: false,
      finalPrice: 2000,
    };

    const router = createMemoryRouter(
      [
        {
          path: "/order-check",
          element: <PayCheckPage />,
        },
      ],
      {
        initialEntries: [
          {
            pathname: "/order-check",
            state,
          },
        ],
      }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText("결제 확인")).toBeInTheDocument();

    expect(
      screen.getByText("총 1종류의 상품 2개를 주문했습니다.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("최종 결제 금액을 확인해 주세요.")
    ).toBeInTheDocument();

    expect(screen.getByText("총 결제 금액")).toBeInTheDocument();
    expect(screen.getByText("2,000원")).toBeInTheDocument();

    expect(screen.getByText("장바구니로 돌아가기")).toBeInTheDocument();
  });
});
