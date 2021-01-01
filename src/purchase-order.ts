import { Address } from "./common";

export interface PurchaseOrder {
  attention: string;
  currencyCode?: string;
  currencySymbol?: string;
  deliveryDate: Date;
  expectedDeliveryDate: Date;
  isInclusiveTax: boolean;
  items: PurchaseOrderItem[];
  note: string;
  orderStatus: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  shipVia: string;
  shipmentTrackingNumber: string;
  shipping: Address;
  status: string;
  subTotal: number;
  total: number;
}

interface PurchaseOrderItem {
  description: string;
  discount: number;
  name: string;
  quantity: number;
  rate: number;
  sku: string;
  taxId: string;
  taxName: string;
  taxPercentage: number;
  total: number;
}
