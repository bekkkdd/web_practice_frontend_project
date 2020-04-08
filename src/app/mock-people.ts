import { Person } from './person';

export const PEOPLE: Person[] = [
  { id: 1, name: 'Bekdaulet', country_id: 1, is_infected: false, infected_date: new Date('2020-03-30'), infected_by: 3, is_recovered: true},
  { id: 2, name: 'Adil', country_id: 1, is_infected: false, infected_date: null, infected_by: null, is_recovered: false },
  { id: 3, name: 'Beybarys', country_id: 1, is_infected: true, infected_date: new Date('2020-03-28'), infected_by: 8, is_recovered: false },
  { id: 4, name: 'Sanzhar', country_id: 1, is_infected: false, infected_date: null, infected_by: null, is_recovered: false },
  { id: 5, name: 'Islam', country_id: 2, is_infected: true, infected_date: new Date('2020-03-28'), infected_by: 12, is_recovered: false },
  { id: 6, name: 'Aboka', country_id: 2, is_infected: false, infected_date: new Date('2020-03-12'), infected_by: 8, is_recovered: true },
  { id: 7, name: 'Zanghar', country_id: 2, is_infected: true, infected_date: new Date('2020-03-30'), infected_by: 5, is_recovered: false },
  { id: 8, name: 'Erzhan', country_id: 2, is_infected: true, infected_date: new Date('2020-02-15'), infected_by: null, is_recovered: false },
  { id: 9, name: 'Askar', country_id: 3, is_infected: false, infected_date: new Date('2020-03-20'), infected_by: 8, is_recovered: true },
  { id: 10, name: 'Azamat', country_id: 3, is_infected: true, infected_date: new Date('2020-02-20'), infected_by: 8, is_recovered: false },
  { id: 12, name: 'Ansar', country_id: 3, is_infected: false, infected_date: new Date('2020-03-02'), infected_by: 10, is_recovered: true },
  { id: 13, name: 'Almaz', country_id: 3, is_infected: true, infected_date: new Date('2020-04-01'), infected_by: 5, is_recovered: false },
  { id: 14, name: 'Darkhan', country_id: 4, is_infected: false, infected_date: null, infected_by: null, is_recovered: false },
  { id: 15, name: 'Damir', country_id: 4, is_infected: false, infected_date: new Date('2020-04-02'), infected_by: 1, is_recovered: true },
  { id: 16, name: 'Dias', country_id: 4, is_infected: false, infected_date: null, infected_by: null, is_recovered: false },
  { id: 17, name: 'Ernar', country_id: 4, is_infected: false, infected_date: null, infected_by: null, is_recovered: false },
];
