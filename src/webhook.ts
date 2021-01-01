export interface Webhook<T> {
  createdAt: Date;
  id: string;
  supplierId: string;
  topic: T;
  updatedAt: Date;
  url: string;
}
