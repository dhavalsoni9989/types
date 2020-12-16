import { I18nString } from "./common";

export interface Product {
  sku: string;

  name: I18nString;
  description: I18nString;
  archive: boolean;

  externalUrl: string;

  externalId: string;

  supplier: string;

  images: string[];
  tax_class: string;

  categories: {
    id: number;
    name: I18nString;
  };
  ship_from: {
    city: string;
    country: string;
  };
  attributes: ProductAttribute[];
  variations: ProductVariation[];
}

interface ProductVariation {
  sku: string;
  externalId: string;
  cost_price: number;
  sale_price: number;
  market_price: number;
  weight: number;
  quantity: number;
  attributes: ProductVariationAttribute[];
}

interface ProductAttribute {
  name: I18nString;
  options: I18nString[];
}

interface ProductVariationAttribute {
  name: I18nString;
  option: I18nString;
}
