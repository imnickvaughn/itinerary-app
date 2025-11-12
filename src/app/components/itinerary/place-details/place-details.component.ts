import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { LocationInputComponent } from '../../forms/location-input/location-input.component';
import { DateTimePickerComponent } from '../../forms/date-time-picker/date-time-picker.component';
import { TransportSelectorComponent } from '../../forms/transport-selector/transport-selector.component';
import { PlaceService } from '../../../services/place.service';
import { PlaceDetails } from '../../../models/place.interface';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationBarComponent,
    TopNavTitleComponent,
    ProgressBarComponent,
    BottomBarComponent,
    LocationInputComponent,
    DateTimePickerComponent,
    TransportSelectorComponent
  ],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.scss'
})
export class PlaceDetailsComponent implements OnInit {
  form: FormGroup;
  activeTab: 'basic' | 'datetime' = 'basic';

  constructor(
    private fb: FormBuilder,
    private placeService: PlaceService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      location: [''],
      date: [''],
      startTime: [''],
      endTime: [''],
      transportType: [null]
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onDiscard(): void {
    // Handle discard action
  }

  setActiveTab(tab: 'basic' | 'datetime'): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const placeDetails: PlaceDetails = {
        name: this.form.value.name,
        location: this.form.value.location,
        description: this.form.value.description,
        date: this.form.value.date,
        startTime: this.form.value.startTime,
        endTime: this.form.value.endTime,
        transportType: this.form.value.transportType
      };
      this.placeService.addPlace(placeDetails).subscribe();
    }
  }
}

