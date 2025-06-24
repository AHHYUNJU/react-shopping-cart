import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import { OrderCheckPage } from "./pages/OrderCheckPage/OrderCheckPage";
import { PayCheckPage } from "./pages/PayCheckPage/PayCheckPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ShoppingCartPage /> },
      { path: "/order-check", element: <OrderCheckPage /> },
      { path: "/pay-check", element: <PayCheckPage /> },
      { path: "*", element: <p>오류가 발생하였습니다.</p> },
    ],
  },
];

const router = createBrowserRouter(routes);
export { router };
