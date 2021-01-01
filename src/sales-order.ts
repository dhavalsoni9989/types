import { Address } from "./common";

export interface SalesOrder {
  adjustment: number;
  adjustmentDescription: string;
  coupon: string;
  createDate: Date;
  discount: number;
  externalId: string;
  financialStatus:
    | "unpaid"
    | "paid"
    | "partially_paid"
    | "voided"
    | "wallet_refunded"
    | "wallet_partially_refunded"
    | "refunded"
    | "partially_refunded";
  fulfillmentStatus:
    | "pending"
    | "processing"
    | "packed"
    | "shipped"
    | "delivered"
    | "voided";
  id: string;
  invoice_url: string;
  items: Partial<SalesOrderItem>[];
  notes: string;
  orderNumber: string;
  shipment_date: string;
  shipping: Address;
  shipping_method: string;
  taxTotal: number;
  total: number;
  trackingNumber: string;
  updateDate: Date;
  warnings: string[];
  warningsSnippet: string;
}

interface SalesOrderItem {
  description: string;
  discount: number;
  id: string;
  name: string;
  quantity: number;

  quantityCancelled: number;
  rate: number;
  sku: string;
  taxId: string;

  taxName: string;
  taxPercentage: number;
  taxType: string;
  total: number;
}
