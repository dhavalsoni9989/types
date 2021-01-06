import { ProductVariationAttribute } from './variation-attribute';

export interface ProductVariation {
    attributes: ProductVariationAttribute[];
    cost_price: number;
    externalId: string;
    market_price: number;
    quantity: number;
    sale_price: number;
    sku: string;
    weight: number;
  }