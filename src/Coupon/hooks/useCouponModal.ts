import { useState, useCallback } from "react";

function useCouponModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState(0);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const applyDiscount = useCallback((amount: number) => {
    setDiscount(amount);
  }, []);

  return { isOpen, open, close, discount, applyDiscount };
}

export { useCouponModal };

//   const handleCouponOpen = () => setIsCouponModalOpen(true);
//   const handleCouponClose = () => setIsCouponModalOpen(false);

//   return (
//     <S.OrderCheckContent>
//       <S.CartHeader>
//         <S.Title>주문 확인</S.Title>
//         <S.SubText>
//           <span>
//             총 {selectedCartItemList.length}종류의 상품 {totalQuantity}개를
//             주문합니다.
//           </span>
//           <span>최종 결제 금액을 확인해 주세요.</span>
//         </S.SubText>
//       </S.CartHeader>

//       <S.ItemList>
//         {selectedCartItemList.length > 0 ? (
//           selectedCartItemList.map((item) => (
//             <S.ItemBox key={item.id}>
//               <Hr />
//               <S.Item>
//                 <S.Image src={item.product.imageUrl} alt={item.product.name} />
//                 <S.Info>
//                   <Flex direction="column" gap="4px">
//                     <S.Name>{item.product.name}</S.Name>
//                     <S.Price>{item.product.price.toLocaleString()}원</S.Price>
//                   </Flex>
//                   <S.Quantity>{item.cartQuantity}개</S.Quantity>
//                 </S.Info>
//               </S.Item>
//             </S.ItemBox>
//           ))
//         ) : (
//           <p>장바구니에 상품이 없습니다</p>
//         )}
//       </S.ItemList>

//       <S.CouponApplyButton onClick={handleCouponOpen}>
//         쿠폰 적용
//       </S.CouponApplyButton>

//       <CouponModal
//         isOpen={isCouponModalOpen}
//         onClose={handleCouponClose}
//         allProductPrice={totalPrice}
//         cartItems={selectedCartItemList}
//         shippingFee={finalShippingFee}
//         onDiscountChange={setCouponDiscount}
//       />

//       <Shipping isRemote={isRemote} onRemoteChange={onRemoteChange} />

//       <Receipt
//         allProductPrice={totalPrice}
//         shippingFee={finalShippingFee}
//         couponDiscount={couponDiscount}
//         showCouponDiscount
//       />
//     </S.OrderCheckContent>
//   );
// }

// export { OrderCheckContent };
