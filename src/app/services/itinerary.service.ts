import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Itinerary, ItineraryFormData } from '../models/itinerary.interface';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private currentItinerary: Itinerary | null = null;

  getCurrentItinerary(): Observable<Itinerary | null> {
    return of(this.currentItinerary).pipe(delay(1000));
  }

  createItinerary(formData: ItineraryFormData): Observable<Itinerary> {
    const newItinerary: Itinerary = {
      id: `itinerary${Date.now()}`,
      ...formData,
      members: [],
      places: []
    };
    this.currentItinerary = newItinerary;
    return of(newItinerary).pipe(delay(1000));
  }

  updateItinerary(updates: Partial<Itinerary>): Observable<Itinerary> {
    if (this.currentItinerary) {
      this.currentItinerary = { ...this.currentItinerary, ...updates };
      return of(this.currentItinerary).pipe(delay(1000));
    }
    throw new Error('No current itinerary to update');
  }

  calculatePreferenceMatch(): Observable<number> {
    // Mock preference match calculation
    const match = Math.floor(Math.random() * 100);
    if (this.currentItinerary) {
      this.currentItinerary.preferenceMatch = match;
    }
    return of(match).pipe(delay(1000));
  }
}

