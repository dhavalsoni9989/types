import { I18nString } from "./common";

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

interface ProductVariation {
  attributes: ProductVariationAttribute[];
  cost_price: number;
  externalId: string;
  market_price: number;
  quantity: number;
  sale_price: number;
  sku: string;
  weight: number;
}

interface ProductAttribute {
  name: I18nString;
  options: I18nString[];
}

interface ProductVariationAttribute {
  name: I18nString;
  option: I18nString;
}
