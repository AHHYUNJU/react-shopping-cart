import { useLocation, useNavigate } from "react-router";
import { Header } from "@/shared/components/layout/Header/Header";
import { Footer } from "@/shared/components/layout/Footer/Footer";
import { PayCheckContent } from "@/CartItem/components/PayCheckContent/PayCheckContent";

import * as S from "./PayCheckPage.styles";

function PayCheckPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedCartItemList = [],
    isRemote = false,
    finalPrice = 0,
  } = location.state || {};

  const handleReturnClick = () => {
    navigate("/", {});
  };

  return (
    <S.PayCheckPage>
      <Header />
      <PayCheckContent
        selectedCartItemList={selectedCartItemList}
        isRemote={isRemote}
        finalPrice={finalPrice}
      />
      <Footer
        text="장바구니로 돌아가기"
        active={true}
        handleClick={handleReturnClick}
      ></Footer>
    </S.PayCheckPage>
  );
}

export { PayCheckPage };
