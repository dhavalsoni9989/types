export interface PurchaseOrderItem {
  accountId: string;
  description: string;
  id: string;
  name: string;
  quantity: number;
  rate: number;
  sku: string;
  taxId: string;
  taxName: string;
  taxPercentage: number;
  taxType: string;
  total: number;
}
