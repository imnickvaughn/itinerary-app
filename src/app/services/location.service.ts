import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Location } from '../models/location.interface';
import locationsData from '../../assets/data/locations.json';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly locations: Location[] = locationsData as Location[];

  getLocations(): Observable<Location[]> {
    return of(this.locations).pipe(delay(1000));
  }

  getLocationById(id: string): Observable<Location | undefined> {
    const location = this.locations.find(loc => loc.id === id);
    return of(location).pipe(delay(1000));
  }

  searchLocations(query: string): Observable<Location[]> {
    const filtered = this.locations.filter(loc =>
      loc.name.toLowerCase().includes(query.toLowerCase()) ||
      loc.address.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered).pipe(delay(1000));
  }
}

