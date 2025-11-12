import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TransportService, TransportOption } from '../../../services/transport.service';
import { TransportType } from '../../../models/enums/transport-type.enum';

@Component({
  selector: 'app-transport-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport-selector.component.html',
  styleUrl: './transport-selector.component.scss'
})
export class TransportSelectorComponent implements OnInit {
  @Input() selectedTransport: TransportType | null = null;

  transportOptions$: Observable<TransportOption[]> = this.transportService.getTransportOptions();
  transportOptions: TransportOption[] = [];

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.transportOptions$.subscribe(options => {
      this.transportOptions = options;
    });
  }

  selectTransport(type: TransportType): void {
    this.selectedTransport = type;
  }

  isSelected(type: TransportType): boolean {
    return this.selectedTransport === type;
  }
}

