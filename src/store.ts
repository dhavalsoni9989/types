import { Address } from "./common";

export interface Store {
  url: string;

  name: string;
  logo: string;
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
  created: Date;
  updated: Date;

  sale_price: number;
  compared_at_price: number;
  currency: string;

  consumer_key: string;
  consumer_secret: string;

  external_data: object;
  internal_data: object;

  users: StoreUser;
  languages: string[];
  address: BillingAddress;

  debit: number;
  credit: number;
}

export interface StoreUser {
  email: string;
  roles: string[];
  first_name?: string;
  last_name?: string;
}

export interface BillingAddress extends Address {
  tax_number: string;
}
