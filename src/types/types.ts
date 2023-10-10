export interface Place {
  id: number;
  name: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  typology: string[];
  phone: string;
  notes: string;
}

export interface PlaceS {
  id: string;
  name: string;
  city: string;
  address: string;
  lat: string;
  lng: string;
  typology: string[];
  phone: string;
  notes: string;
}
export interface Places {
  places: Place[];
}

export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}
