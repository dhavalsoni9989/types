/**
 * User subscription
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
  id: string;
  membershipId: string;
  storeId: string;
  invoiceId: string;
  reference: string;
  status: "confirmed" | "pending" | "cancelled";
  startDate: Date;
  expireDate: Date;
  autoRenew: boolean;
  renewed: boolean;
  retries: Date[];
}
