import { Address } from "./common";
import { Bill } from "./bill";
import { PurchaseOrderItem } from "purchase-order-item";
import { PurchaseReceive } from "./purchase-order-receive";
import { PurchaseTax } from "./purchase-tax";
import { SalesOrder } from "./sales-order";

export interface PurchaseOrder {
  adjustment: number;

  adjustmentDescription: string;
  attention: string;
  billedStatus: string;
  bills: Bill[];
  comments: PurchaseOrderComment[];
  createdTime: string;
  currencyCode: string;
  currencySymbol: string;
  date: string;
  deliveryAddress: Address;
  deliveryCustomerId: string;
  deliveryCustomerName: string;
  deliveryDate: string;
  deliveryOrgAddressId: string;
  exchangeRate: number;
  expectedDeliveryDate: string;
  isDropShipment: boolean;
  isInclusiveTax: boolean;
  items: PurchaseOrderItem[];
  lastModifiedTime: string;
  notes: string;
  orderStatus: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  purchasereceives: PurchaseReceive[];
  receivedStatus: string;
  referenceNumber: string;
  salesorderId: string;
  salesorders: SalesOrder[];
  shipVia: string;
  shipmentTrackingNumber?: string;
  status: string;
  subTotal: number;
  subTotalInclusiveOfTax: number;
  taxTotal: number;
  taxes: PurchaseTax[];
  terms: string;
  total: number;
}

export interface PurchaseOrderComment {
  commentId: string;
  commentType: string;
  date: Date;
  dateDescription: string;
  description: string;
  operationType: string;
  purchaseorderId: string;
  time: string;
  transactionType: string;
}
