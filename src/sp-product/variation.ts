import { ProductVariationAttribute } from "../product";

export interface SPProductVariation {
  external_id?: string;
  attributes: ProductVariationAttribute[];
  barcode?: string;
  market_price?: number;
  quantity: number;
  sale_price: number;
  sku: string;
  source_sku?: string;
  source_weight?: number;
  vat?: number;
  weight?: number;
}
