import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { LocationInputComponent } from '../../forms/location-input/location-input.component';

@Component({
  selector: 'app-itinerary-basics',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationBarComponent,
    TopNavTitleComponent,
    ProgressBarComponent,
    BottomBarComponent,
    LocationInputComponent
  ],
  templateUrl: './itinerary-basics.component.html',
  styleUrl: './itinerary-basics.component.scss'
})
export class ItineraryBasicsComponent implements OnInit {
  form: FormGroup;
  activeTab: 'details' | 'map' = 'details';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      placeSelection: ['']
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onDiscard(): void {
    // Handle discard action
  }

  setActiveTab(tab: 'details' | 'map'): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Handle form submission
    }
  }
}

