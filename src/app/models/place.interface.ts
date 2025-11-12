import { Location } from './location.interface';
import { TransportType } from './enums/transport-type.enum';

export interface Place {
  id: string;
  name: string;
  location: Location;
  description?: string;
  startTime?: string;
  endTime?: string;
  date?: string;
  transportType?: TransportType;
  duration?: number; // in minutes
  category?: string;
}

export interface PlaceDetails {
  name: string;
  location: Location;
  description: string;
  startTime: string;
  endTime: string;
  date: string;
  transportType: TransportType;
}

