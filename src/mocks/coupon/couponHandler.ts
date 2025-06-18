import { http, HttpResponse } from "msw";
import { COUPON_MOCK_DATA } from "./couponMockData";

export const couponHandler = [
  http.get("/coupons", () => {
    return HttpResponse.json(COUPON_MOCK_DATA);
  }),
];
