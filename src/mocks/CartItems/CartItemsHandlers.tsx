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
        ({ quantity }) => quantity === Number(quantityOption)
      );
    }
    return HttpResponse.json({
      ...CART_ITEM_MOCK_DATA,
      content: items,
    });
  }),
];
