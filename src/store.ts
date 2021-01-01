import { Address } from "./common";

export interface Store {
  address: BillingAddress;

  compared_at_price: number;
  consumer_key: string;
  consumer_secret: string;
  created: Date;
  credit: number;
  currency: string;

  debit: number;
  external_data: unknown;
  internal_data: unknown;

  languages: string[];
  logo: string;

  name: string;
  sale_price: number;

  status:
    | "pending"
    | "confirmed"
    | "unconfirmed"
    | "uninstalled"
    | "archived"
    | "error";
  type:
    | "woocommerce"
    | "magento2"
    | "salla"
    | "expandcart"
    | "opencart"
    | "shopify"
    | "csv"
    | "ebay"
    | "api"
    | "catalog"
    | "youcan"
    | "other";
  updated: Date;

  url: string;
  users: StoreUser;
}

export interface StoreUser {
  email: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}

export interface BillingAddress extends Address {
  tax_number: string;
}
