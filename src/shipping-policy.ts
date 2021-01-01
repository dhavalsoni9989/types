export interface ShipmentPolicy {
  countries: string[];
  name: string;
  rules: [
    {
      cost: number;
      courier: string;
      delivery_days_max: number;
      delivery_days_min: number;
      type: "weight" | "price";
      units_max: number;
      units_min: number;
    }
  ];
  ship_from: [
    {
      Enum: string;
      city: string;
      country: string;
    }
  ];
}
