import { I18nString } from "../common";
import { ProductAttribute } from "./attribute";
import { ProductVariation } from "./variation";

/**
 * MP Product
 *
 * @export
 * @interface Product
 */
export interface Product {
  archive: boolean;

  attributes: ProductAttribute[];
  categories: {
    id: number;
    name: I18nString;
  };
  description: I18nString;

  externalId: string;

  externalUrl: string;

  images: string[];

  name: I18nString;
  ship_from: {
    city: string;
    country: string;
  };

  sku: string;
  supplier: string;
  tax_class: string;
  variations: ProductVariation[];
}
