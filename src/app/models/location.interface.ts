export interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

export interface LocationInput {
  label: string;
  value: string;
  placeholder: string;
}

