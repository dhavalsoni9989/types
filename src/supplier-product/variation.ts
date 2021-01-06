import { I18nString } from "../common";

export interface SPVariation {
  attributes: VariationAttribute[],
  barcode: string,
  market_price: number,
  quantity: number,
  sale_price: number,
  sku: string,
  source_sku: string,
  source_weight: number,
  vat: number,
  weight: number
}

interface VariationAttribute {
  name: I18nString,
  option: I18nString
}
