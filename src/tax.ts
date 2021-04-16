export interface Tax<T = { [key: string]: string | number }> {
  class: string[];
  country: string;
  id: string;
  isInclusive: boolean;
  metadata?: T;
  name: string;
  omsId: string;
  percentage: number;
}
