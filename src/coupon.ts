export interface Coupon {
  code: string;
  discount: {
    value: number;
    type: "%" | "$";
  };
  total: {
    value: number;
    type: "%" | "$";
  };
  shipping: {
    value: number;
    type: "%" | "$";
  };
  tax: {
    value: number;
    type: "%" | "$";
  };
  type: "salesorder" | "subscription";
  startDate: Date;
  endDate: Date;
  maxUses: number;
  minAppliedAmount: number;
  appliedMemberships: string[];
  auto: boolean;
  campaignName: string;
  useCount: number;
}
