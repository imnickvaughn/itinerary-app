import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { TransportType } from '../models/enums/transport-type.enum';
import transportData from '../../assets/data/transport-options.json';

export interface TransportOption {
  id: string;
  type: TransportType;
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private readonly transportOptions: TransportOption[] = transportData as TransportOption[];

  getTransportOptions(): Observable<TransportOption[]> {
    return of([...this.transportOptions]).pipe(delay(1000));
  }

  getTransportOptionByType(type: TransportType): Observable<TransportOption | undefined> {
    const option = this.transportOptions.find(opt => opt.type === type);
    return of(option).pipe(delay(1000));
  }
}

