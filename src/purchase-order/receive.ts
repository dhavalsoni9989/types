import { Bill } from "bill";

export interface PurchaseReceive {
  bills: Bill[];
  date: string;
  notes: string;
  receiveId: string;
  receiveNumber: string;
}
