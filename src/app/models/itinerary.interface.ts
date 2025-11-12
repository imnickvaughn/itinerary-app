import { Location } from './location.interface';
import { Member } from './member.interface';
import { Place } from './place.interface';
import { TransportType } from './enums/transport-type.enum';

export interface Itinerary {
  id: string;
  title: string;
  origin: Location;
  destination?: Location;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  members: Member[];
  places: Place[];
  transportType?: TransportType;
  preferenceMatch?: number; // percentage
}

export interface ItineraryFormData {
  title: string;
  origin: Location;
  destination?: Location;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
}

