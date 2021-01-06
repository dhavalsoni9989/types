import { I18nString } from "../common";
import { SPAttribute } from "./attribute";
import { SPCategory } from "./category";
import { SPVariation } from "./variation";

export interface SPProduct {
  attributes: SPAttribute,
  barcode: string,
  brand: I18nString,
  categories: SPCategory[],
  created_date: Date,
  description: I18nString,
  description_short: I18nString,
  images: string[],
  name: I18nString,
  qualified: number,
  sku: string,
  source_sku: string,
  supplier_id: string,
  updated_date: Date,
  url: string,
  variations: SPVariation[],
  warehouse_id: string
}