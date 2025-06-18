import { setupWorker } from "msw/browser";
import { cartItemHandler } from "./cartItem/cartItemHandler";
import { couponHandler } from "./coupon/couponHandler";

export const worker = setupWorker(...cartItemHandler, ...couponHandler);
