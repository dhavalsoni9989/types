export interface PurchaseTax {
  amount?: number;
  id?: string;
  isEditable?: boolean;
  name?: string;
  percentage?: number;
  type?: "tax" | "compound_tax";
}
