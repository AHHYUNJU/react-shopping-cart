import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { ShoppingCartContent } from "@/CartItem/components/ShoppingCartContent/ShoppingCartContent";
import * as S from "./ShoppingCartPage.styles";

function ShoppingCartPage() {
  return (
    <S.ShoppingCartPage>
      <Header>SHOP</Header>
      <ShoppingCartContent />
      <Footer>주문 확인</Footer>
    </S.ShoppingCartPage>
  );
}

export { ShoppingCartPage };
