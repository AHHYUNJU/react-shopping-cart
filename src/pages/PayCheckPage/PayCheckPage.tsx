import { useLocation, useNavigate } from "react-router";
import { Header } from "@/shared/layout/Header/Header";
import { PayCheckContent } from "@/CartItem/components/PayCheckContent/PayCheckContent";
import { Footer } from "@/shared/layout/Footer/Footer";
import * as S from "./PayCheckPage.styles";

function PayCheckPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCartItemList = location.state?.selectedCartItemList || [];
  const isRemote = location.state?.isRemote || false;

  const handleReturnClick = () => {
    navigate("/", {});
  };

  return (
    <S.PayCheckPage>
      <Header />
      <PayCheckContent
        selectedCartItemList={selectedCartItemList}
        isRemote={isRemote}
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
