import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/location.interface';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { LocationInputComponent } from '../../forms/location-input/location-input.component';
import { DateTimePickerComponent } from '../../forms/date-time-picker/date-time-picker.component';
import { TransportSelectorComponent } from '../../forms/transport-selector/transport-selector.component';
import { PreferenceSelectorComponent } from '../../forms/preference-selector/preference-selector.component';
import { RadioButtonComponent } from '../../shared/radio-button/radio-button.component';

@Component({
  selector: 'app-origin-screen',
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
    TransportSelectorComponent,
    PreferenceSelectorComponent,
    RadioButtonComponent
  ],
  templateUrl: './origin-screen.component.html',
  styleUrl: './origin-screen.component.scss'
})
export class OriginScreenComponent implements OnInit {
  form: FormGroup;
  locations$: Observable<Location[]> = this.locationService.getLocations();
  preferenceMatch: number = 0;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.form = this.fb.group({
      startingLocation: ['', Validators.required],
      endingLocation: [''],
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

  onSubmit(): void {
    if (this.form.valid) {
      // Handle form submission
    }
  }
}

