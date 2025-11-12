import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Place, PlaceDetails } from '../models/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private readonly places: Place[] = [];

  getPlaces(): Observable<Place[]> {
    return of([...this.places]).pipe(delay(1000));
  }

  getPlaceById(id: string): Observable<Place | undefined> {
    const place = this.places.find(p => p.id === id);
    return of(place).pipe(delay(1000));
  }

  addPlace(placeDetails: PlaceDetails): Observable<Place> {
    const newPlace: Place = {
      id: `place${Date.now()}`,
      ...placeDetails
    };
    this.places.push(newPlace);
    return of(newPlace).pipe(delay(1000));
  }

  updatePlace(id: string, placeDetails: Partial<PlaceDetails>): Observable<Place> {
    const index = this.places.findIndex(p => p.id === id);
    if (index !== -1) {
      this.places[index] = { ...this.places[index], ...placeDetails };
      return of(this.places[index]).pipe(delay(1000));
    }
    throw new Error(`Place with id ${id} not found`);
  }

  deletePlace(id: string): Observable<boolean> {
    const index = this.places.findIndex(p => p.id === id);
    if (index !== -1) {
      this.places.splice(index, 1);
      return of(true).pipe(delay(1000));
    }
    return of(false).pipe(delay(1000));
  }
}

