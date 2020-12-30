export interface Webhook {
    id: string;
    // TODO: enum topics
    topic: string;
    supplierId: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
  }
  