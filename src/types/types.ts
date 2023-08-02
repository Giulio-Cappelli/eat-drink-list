export interface Place {
  id: number;
  name: string;
  city: string;
  address: string;
  typology: string[];
  phone?: string;
  notes?: string[];
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
