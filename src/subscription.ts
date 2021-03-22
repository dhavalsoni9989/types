/**
 * User subscription
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
  autoRenew: boolean;
  expireDate: Date;
  id: string;
  invoiceId: string;
  membershipId: string;
  reference: string;
  renewed: boolean;
  retries: Date[];
  startDate: Date;
  status: "confirmed" | "pending" | "cancelled";
  paymentGateway: string;
  storeId: string;
}
