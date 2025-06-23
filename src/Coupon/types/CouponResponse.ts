export type CouponResponse =
  | FixedCoupon
  | BuyXGetYCoupon
  | FreeShippingCoupon
  | PercentageCoupon;

type BaseCoupon = {
  id: number;
  code: string;
  description: string;
  expirationDate: string;
};

export type FixedCoupon = BaseCoupon & {
  discount: number;
  minimumAmount: number;
  discountType: "fixed";
};

export type BuyXGetYCoupon = BaseCoupon & {
  buyQuantity: number;
  getQuantity: number;
  discountType: "buyXgetY";
};

export type FreeShippingCoupon = BaseCoupon & {
  minimumAmount: number;
  discountType: "freeShipping";
};

export type PercentageCoupon = BaseCoupon & {
  discount: number;
  availableTime: {
    start: string;
    end: string;
  };
  discountType: "percentage";
};
