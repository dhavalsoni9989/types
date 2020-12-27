
export interface Supplier {
    id: string;
    key: string;
    secret: string;
    name: string;
    created_date: Date;
    updated_date: Date;
    currency: string;
    url: string;
    integrations: {
      type: 'ideasoft';
      data: {
        access_token: string;
        fields: any;
      };
    };
  }
  
  export interface Webhook {
    id: string;
    webhookUrl: string;
    topic: string;
  }
  