import { Address } from "./common";

export interface PurchaseOrder {
  purchaseorderId: string;
  purchaseorderNumber: string;
  orderStatus: string;
  total: number;
  shipmentTrackingNumber: string;
  deliveryDate: Date;
  expectedDeliveryDate: Date;
  shipVia: string;
  status: string;
  currencyCode?: string;
  currencySymbol?: string;
  subTotal: number;
  isInclusiveTax: boolean;
  items: Item[];
  note: string;
  attention: string;
  shipping: Address;
  deliveryAddress: Address;
}

interface Item {
  sku: string;
  name: string;
  rate: number;
  quantity: number;
  taxId: string;
  taxName: string;
  taxPercentage: number;
  description: string;
  discount: number;
  total: number;
}
