export interface Tax {
  id: string;
  name: string;
  country: string;
  class: string[];
  percentage: number;
  omsId: string;
  isInclusive: boolean;
}
