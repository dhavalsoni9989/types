import { I18nString } from "./common";

export interface SupplierProduct {
  sku: string,
  source_sku: string,
  barcode: string,
  supplier_id: string,
  warehouse_id: string,
  created_date: Date,
  updated_date: Date,
  url: string,
  qualified: number,
  name: I18nString,
  description: I18nString,
  description_short: I18nString,
  brand: I18nString,
  images: string[],
  categories: categories[],
  attributes: attributes,
  variations: Variations[]
}

interface categories {
  _id: number,
  name: I18nString,
  treeNodeLevel: number,
  updated: Date,
  productsCount: number
}

interface attributes {
  name: I18nString,
  options: I18nString[]
}

interface variantAttributes {
  name: I18nString,
  option: I18nString
}

interface Variations {
  sku: string,
  source_sku: string,
  barcode: string,
  vat: number,
  sale_price: number,
  market_price: number,
  quantity: number,
  weight: number,
  source_weight: number,
  attributes: variantAttributes[]
}
