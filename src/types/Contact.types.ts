export enum ContactGroupEnum {
  Colleague = '1',
  Classmate = '2',
  Friend = '3',
}

export interface Contact {
  id: number;
  name: string;
  avatar: string;
  group?: ContactGroupEnum;
  intro?: string;
}
