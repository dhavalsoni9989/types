export interface PurchaseOrderInvoice {
  adjustment: number;
  balance: number;
  coupon: string;
  createdTime: Date;
  customerId: string;
  customerName: string;
  date: Date;
  dueDate: Date;
  dueDays: string;
  invoiceId: string;
  invoiceNumber: string;
  isInclusiveTax?: boolean;
  lastModifiedTime: Date;
  referenceNumber: string;
  shippingCharge: number;
  status: string;
  total: number;
}