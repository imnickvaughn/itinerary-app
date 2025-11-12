import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from '../../shared/notification-bar/notification-bar.component';
import { TopNavTitleComponent } from '../../shared/top-nav-title/top-nav-title.component';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { LocationInputComponent } from '../../forms/location-input/location-input.component';
import { PreferenceSelectorComponent } from '../../forms/preference-selector/preference-selector.component';
import { RadioButtonComponent } from '../../shared/radio-button/radio-button.component';
import { MemberService } from '../../../services/member.service';

@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationBarComponent,
    TopNavTitleComponent,
    ProgressBarComponent,
    BottomBarComponent,
    LocationInputComponent,
    PreferenceSelectorComponent,
    RadioButtonComponent
  ],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})
export class MemberDetailsComponent implements OnInit {
  form: FormGroup;
  selectedPreferences: string[] = [];

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
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
      const memberData = {
        ...this.form.value,
        preferences: this.selectedPreferences
      };
      this.memberService.addMember(memberData).subscribe();
    }
  }
}

