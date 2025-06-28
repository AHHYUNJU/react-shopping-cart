import { useNavigate } from "react-router";
import { Header } from "@/shared/components/layout/Header/Header";
import { Footer } from "@/shared/components/layout/Footer/Footer";
import { ErrorBox } from "@/shared/components/feedback/Errorbox/Errorbox";
import { ShoppingCartContent } from "@/CartItem/components/ShoppingCartContent/ShoppingCartContent";
import { useCartItemContext } from "@/CartItem/context/CartItemContext";
import { useErrorContext } from "@/shared/context/ErrorContext";
import useCartItemList from "@/CartItem/hooks/useCartItemList";

import * as S from "./ShoppingCartPage.styles";

function ShoppingCartPage() {
  const navigate = useNavigate();
  const { cartItemList } = useCartItemContext();
  const { state } = useCartItemList();
  const { errorMessage } = useErrorContext();

  const handleOrderListButtonClick = () => {
    const selectedCartItemList = cartItemList.filter((item) => item.isChecked);

    localStorage.setItem(
      "selectedCartItemList",
      JSON.stringify(selectedCartItemList)
    );

    navigate("/order-check", { state: { selectedCartItemList } });
  };

  if (state.isLoading) return <p>로딩 중...</p>;

  const selectedCount = cartItemList.filter((item) => item.isChecked).length;

  return (
    <S.ShoppingCartPage>
      <Header>SHOP</Header>
      {errorMessage && <ErrorBox />}
      <ShoppingCartContent />
      <Footer
        text="주문 확인"
        active={selectedCount > 0}
        handleClick={handleOrderListButtonClick}
      />
    </S.ShoppingCartPage>
  );
}

export { ShoppingCartPage };
