import { http, HttpResponse } from "msw";
import { CART_ITEM_MOCK_DATA } from "./CartItemMockData";

export const cartItemHandler = [
  http.get("/cart-items", ({ request }) => {
    const url = new URL(request.url);
    const idOption = url.searchParams.get("id");
    const quantityOption = url.searchParams.get("quantity");
    let items = CART_ITEM_MOCK_DATA;
    if (idOption !== null) {
      items = items.filter(({ id }) => id === Number(idOption));
    }
    if (quantityOption !== null) {
      items = items.filter(
        ({ cartQuantity }) => cartQuantity === Number(quantityOption)
      );
    }
    return HttpResponse.json({
      ...CART_ITEM_MOCK_DATA,
      content: items,
    });
  }),

  http.patch("/cart-items/:id", async ({ request, params }) => {
    const id = Number(params.id);
    const { quantity } = (await request.json()) as { quantity: number };

    if (!id || typeof quantity !== "number") {
      return HttpResponse.json(
        { error: "잘못된 요청입니다. (id 또는 quantity 누락)" },
        { status: 400 }
      );
    }

    const item = CART_ITEM_MOCK_DATA.find((cartItem) => cartItem.id === id);

    if (!item) {
      return HttpResponse.json(
        { error: "해당 상품이 장바구니에 없습니다." },
        { status: 404 }
      );
    }

    if (quantity > item.product.stockQuantity) {
      return HttpResponse.json(
        { error: "재고 수량을 초과하여 담을 수 없습니다." },
        { status: 409 }
      );
    }
    item.cartQuantity = quantity;

    return HttpResponse.json(item, { status: 200 });
  }),

  http.delete("/cart-items/:id", ({ params }) => {
    const id = Number(params.id);

    const index = CART_ITEM_MOCK_DATA.findIndex((item) => item.id === id);
    if (index === -1) {
      return HttpResponse.json(
        { error: "삭제할 아이템을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    CART_ITEM_MOCK_DATA.splice(index, 1);

    return HttpResponse.json({ message: "삭제 성공" }, { status: 200 });
  }),
];
