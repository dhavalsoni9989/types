import { I18nString } from "./common";
import { Coupon } from "./coupon";

export class Membership {
  id: string;
  name: I18nString;
  tagline: I18nString;
  description: I18nString;
  sort: number;
  active: boolean;
  public: boolean;
  cost: number;
  discount: number;
  paymentFrequency: number;
  paymentFrequencyType: "month" | "year";
  attributes: object;
  coupon: Coupon;
}
