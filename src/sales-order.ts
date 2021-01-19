import { Address } from "./common";
import { PurchaseOrderInvoice } from "./purchase-order";

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
  hasQtyCancelled: boolean;
  id: string;
  invoice_url: string;
  invoices: PurchaseOrderInvoice[];
  isInclusiveTax: boolean;
  items: Partial<SalesOrderItem>[];
  knawat_order_status: string;
  notes: string;
  orderNumber: string;
  shipmentDate: Date;
  shipping: Address;
  shippingCharge: number;
  shipping_method: string;
  status: string;
  subscription: string;
  taxTotal: number;
  taxes: SalesOrderTax[];
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

interface SalesOrderTax {
  taxAmount: number;
  taxName: string;
}