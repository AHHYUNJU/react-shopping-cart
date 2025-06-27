import { useNavigate } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { ErrorBox } from "@/shared/component/Errorbox/Errorbox";
import { ShoppingCartContent } from "@/CartItem/components/ShoppingCartContent/ShoppingCartContent";
import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { useErrorContext } from "@/shared/context/ErrorContext";
import useCartItemList from "@/CartItem/hooks/useCartItemList";

import * as S from "./ShoppingCartPage.styles";

function ShoppingCartPage() {
  const navigate = useNavigate();
  const { cartItemList } = useCartItemContext();
  const selectedCartItemList = cartItemList.filter((item) => item.isChecked);
  const { state } = useCartItemList();
  const { errorMessage } = useErrorContext();

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

  if (state.isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.ShoppingCartPage>
      <Header>SHOP</Header>
      {errorMessage && <ErrorBox />}
      <ShoppingCartContent />
      <Footer
        text="주문 확인"
        active={selectedCartItemList.length > 0}
        handleClick={handleOrderListButtonClick}
      ></Footer>
    </S.ShoppingCartPage>
  );
}

export { ShoppingCartPage };
