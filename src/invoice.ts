export interface Invoice {
  adjustment: number;
  balance: number;
  coupon: string;
  created_time: Date;
  customer_id: string;
  customer_name: string;
  date: Date;
  due_date: Date;
  due_days: number;
  invoice_id: string;
  invoice_number: string;
  last_modified_time: Date;
  reference_number: string;
  shipping_charge: number;
  status: string;
  total: number;
}
