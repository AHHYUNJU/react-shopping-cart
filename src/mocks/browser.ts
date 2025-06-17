import { setupWorker } from "msw/browser";
import { cartItemHandler } from "./CartItems/CartItemsHandlers";

export const worker = setupWorker(...cartItemHandler);
