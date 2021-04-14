/**
 * MP Coupon
 *
 * @export
 * @interface Coupon
 * @template T
 */
export interface Coupon<T = { [key: string]: string | number }> {
  appliedMemberships: string[];
  auto: boolean;
  campaignName: string;
  code: string;
  discount: {
    type: "%" | "$";
    value: number;
  };
  endDate: Date;
  maxUses: number;
  metadata?: T;
  minAppliedAmount: number;
  shipping: {
    type: "%" | "$";
    value: number;
  };
  startDate: Date;
  tax: {
    type: "%" | "$";
    value: number;
  };
  total: {
    type: "%" | "$";
    value: number;
  };
  type: "salesorder" | "subscription";
  useCount: number;
}
