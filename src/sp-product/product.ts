import { I18nString } from "../common";
import { ProductAttribute } from "../product";
import { SPCategory } from "../sp-category";
import { SPProductVariation } from "./variation";

export interface SPProduct {
  attributes?: ProductAttribute[];
  barcode?: string;
  brand?: I18nString;
  categories?: SPCategory[];
  created_date?: Date;
  description?: I18nString;
  description_short?: I18nString;
  external_id?: string;
  fulfillment?: {
    external_id: string;
  };
  images: string[];
  name: I18nString;
  qualified?: 1 | 2 | 4 | 5;
  sku: string;
  source_sku?: string;
  supplier_id?: string;
  updated_date?: Date;
  url: string;
  variations: SPProductVariation[];
  warehouse_id?: string;
}
