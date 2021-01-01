import { Address } from "./common";

export interface SalesOrder {
  id: string;
  items: Partial<SalesOrderItem>[];
  shipping: Address;
  total: number;
  discount: number;
  externalId: string;
  createDate: Date;
  updateDate: Date;
  notes: string;
  adjustment: number;
  adjustmentDescription: string;
  orderNumber: string;
  taxTotal: number;
  invoice_url: string;
  shipping_method: string;
  shipment_date: string;
  trackingNumber: string;
  coupon: string;
  warnings: string[];
  warningsSnippet: string;
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
}

interface SalesOrderItem {
  id: string;
  sku: string;
  name: string;
  description: string;
  rate: number;

  quantity: number;
  quantityCancelled: number;
  discount: number;
  total: number;

  taxId: string;
  taxName: string;
  taxType: string;
  taxPercentage: number;
}
