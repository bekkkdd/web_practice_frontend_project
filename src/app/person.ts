export interface Person {
  id: number;
  name: string;
  country_id: number;
  is_infected: boolean;
  infected_by: number;
  infected_date: Date;
  is_recovered: boolean;
}
