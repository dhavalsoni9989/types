export interface Invoice {
  invoice_id: string;
  customer_name: string;
  customer_id: string;
  status: string;
  invoice_number: string;
  reference_number: string;
  date: Date;
  due_date: Date;
  due_days: number;
  total: number;
  balance: number;
  created_time: Date;
  last_modified_time: Date;
  shipping_charge: number;
  adjustment: number;
  coupon: string;
}
