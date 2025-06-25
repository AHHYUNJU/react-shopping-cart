import { useNavigate } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { ShoppingCartContent } from "@/CartItem/components/ShoppingCartContent/ShoppingCartContent";
import * as S from "./ShoppingCartPage.styles";
import { useCartItemContext } from "@/CartItem/context/CartItemContext";

function ShoppingCartPage() {
  const navigate = useNavigate();
  const { cartItemList } = useCartItemContext();
  const selectedCartItemList = cartItemList.filter((item) => item.isChecked);

  const handleOrderListButtonClick = () => {
    localStorage.setItem(
      "selectedCartItemList",
      JSON.stringify(selectedCartItemList)
    );

    navigate("/order-check", {
      state: {
        selectedCartItemList,
      },
    });
  };

  return (
    <S.ShoppingCartPage>
      <Header>SHOP</Header>
      <ShoppingCartContent />
      <Footer
        text="주문 확인"
        active={cartItemList.length > 0}
        handleClick={handleOrderListButtonClick}
      ></Footer>
    </S.ShoppingCartPage>
  );
}

export { ShoppingCartPage };
