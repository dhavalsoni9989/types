export interface Bill {
  balance: number;
  billId: string;
  billNumber: string;
  date: Date;
  dueDate: Date;
  status: string;
  total: number;
}
