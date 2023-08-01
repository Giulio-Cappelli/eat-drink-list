export type Places = {
  places: Place[];
};

export type Place = {
  id: number;
  name: string;
  city: string;
  address: string;
  type: string[];
  phone?: string;
  notes?: string[];
};
