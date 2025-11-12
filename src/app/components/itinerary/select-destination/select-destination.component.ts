import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-select-destination',
  standalone: true,
  imports: [
    CommonModule,
    NotificationBarComponent,
    TopNavTitleComponent,
    ProgressBarComponent,
    BottomBarComponent
  ],
  templateUrl: './select-destination.component.html',
  styleUrl: './select-destination.component.scss'
})
export class SelectDestinationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialize component
  }

  onDiscard(): void {
    // Handle discard action
  }
}

