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
