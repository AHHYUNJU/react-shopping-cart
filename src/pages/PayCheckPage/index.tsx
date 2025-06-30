import { useLocation, useNavigate } from "react-router";
import { Header } from "@/shared/components/layout/Header/Header";
import { Footer } from "@/shared/components/layout/Footer/Footer";
import { PayCheckContent } from "./components/PayCheckContent/PayCheckContent";

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

  if (!location.state || !selectedCartItemList.length) {
    return (
      <S.PayCheckPage>
        <Header />
        <div>
          <h1>잘못된 접근입니다.</h1>
          <p>
            장바구니에서 상품을 선택한 후에만 주문 확인 페이지를 볼 수 있습니다.
          </p>
        </div>
        <Footer
          text="장바구니로 돌아가기"
          active={true}
          handleClick={handleReturnClick}
        />
      </S.PayCheckPage>
    );
  }

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
      />
    </S.PayCheckPage>
  );
}

export { PayCheckPage };
