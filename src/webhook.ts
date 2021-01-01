export interface Webhook {
  createdAt: Date;
  id: string;
  supplierId: string;
  // TODO: enum topics
  topic: string;
  updatedAt: Date;
  url: string;
}
