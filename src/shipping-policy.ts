export interface ShipmentPolicy {
  name: string;
  countries: string[];
  rules: [
    {
      courier: string;
      delivery_days_min: number;
      delivery_days_max: number;
      units_min: number;
      units_max: number;
      type: "weight" | "price";
      cost: number;
    }
  ];
  ship_from: [
    {
      city: string;
      country: string;
      Enum: string;
    }
  ];
}
