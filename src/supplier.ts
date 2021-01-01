import { Address, RoleUser } from "./common";

export interface Supplier {
  active: boolean;
  address: SupplierAddress[];
  bank: Bank;
  beta: boolean;
  billing: {
    address: Address;
    legal_name: string;
    registration_number: string | number;
    tax_number: string | number;
  };
  company_description: string;
  cost_price: number;
  created_date: Date;
  currency: string;
  default_warehouse_id: string;
  email: string;
  excluded_attributes: string[];
  excluded_brands: string[];
  excluded_categories: string[];
  handling_time: {
    from: number;
    to: number;
  };
  id: string;
  integrations: {
    data: {
      access_token: string;
      fields: unknown;
    };
    enabled: boolean;
    type: string;
  };
  jscrapper_urls: string[];
  key: string;
  languages: string[];
  last_translation_update: Date;
  logo: string;
  max_cost: number;
  min_cost: number;
  min_stock: number;
  name: string;
  project_key: string;
  sale_price: number;
  secret: string;
  skipping_words: string[];
  sku_prefix: string;
  source_type: string;
  translation_pipes: TranslationPipe[];
  translation_worker: boolean;
  updated_date: Date;
  url: string;
  users: RoleUser<"owner" | "accounting" | "products" | "orders">[];
  vat: number;
  vendor: number;
  xml_url: string[];
}

interface TranslationPipe {
  // TODO: enum apply_to
  apply_to: string[];
  from: string;
  to: string;
}
interface SupplierAddress {
  city: string;
  country: string;
  line1: string;
  line2: string;
  post_code: string;
  state: string;
}
interface Bank {
  account_number: string;
  bank_branch: string;
  bank_country: string;
  iban_no: string;
  recipient_address: string;
  recipient_name: string;
  swift_code: string;
}
