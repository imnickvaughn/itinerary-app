import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import preferencesData from '../../assets/data/preferences.json';

export interface Preference {
  id: string;
  name: string;
  type: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  private readonly preferences: Preference[] = preferencesData as Preference[];

  getPreferences(): Observable<Preference[]> {
    return of([...this.preferences]).pipe(delay(1000));
  }

  getPreferencesByType(type: string): Observable<Preference[]> {
    const filtered = this.preferences.filter(pref => pref.type === type);
    return of(filtered).pipe(delay(1000));
  }
}

