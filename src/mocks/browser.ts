import { setupWorker } from "msw/browser";
import { cartItemHandler } from "./cartItem/cartItemHandler";

export const worker = setupWorker(...cartItemHandler);
