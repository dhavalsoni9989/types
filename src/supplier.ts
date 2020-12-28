import { Address } from "./common";

export interface Supplier {
    id: string;
    project_key: string;
    logo: string;
    email: string;
    sku_prefix: string;
    active: boolean;
    beta: boolean;
    cost_price: number;
    sale_price: number;
    min_stock: number;
    max_cost: number;
    min_cost: number;
    vendor: number;
    default_warehouse_id: string;
    handling_time: {
      from: number;
      to: number;
      };
    languages: string[];
    company_description: string;
    translation_pipes: TranslationPipe[];
    last_translation_update: string;
    translation_worker: boolean;
    address: SupplierAddress[];
    users: user[];
    key: string;
    billing: {
      address: Address;
      tax_number: string | number;
      registration_number: string | number;
      legal_name: string;
    };
    bank: bank;
    excluded_brands: string[];
    excluded_attributes: string[];
    excluded_categories: string[];
    skipping_words: string[];
    vat: number;
    secret: string;
    name: string;
    created_date: Date;
    updated_date: Date;
    source_type: string;
    currency: string;
    xml_url: string[];
    url: string;
    integrations: {
      enabled: boolean;
      type: 'ideasoft';
      data: {
        access_token: string;
        fields: any;
      };
    };
  }

interface TranslationPipe {
  from: string;
  to: string;
  // TODO: enum apply_to
  apply_to: string[]
}
interface SupplierAddress {
  line1: string;
  line2: string;
  post_code: string;
  city: string;
  state: string;
  country: string;
}
interface bank {
  swift_code: string;
  iban_no: string;
  recipient_name: string;
  recipient_address: string;
  account_number: string;
  bank_country: string;
  bank_branch: string;
}
interface user {
  email: string;
  // TODO: enum roles
  roles: string[];
}