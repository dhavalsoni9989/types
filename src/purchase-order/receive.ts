import { Bill } from "../bill";

export interface PurchaseReceive {
  bills: Bill[];
  date: Date;
  notes: string;
  receiveId: string;
  receiveNumber: string;
}
