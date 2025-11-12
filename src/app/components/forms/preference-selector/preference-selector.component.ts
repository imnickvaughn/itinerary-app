import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PreferenceService, Preference } from '../../../services/preference.service';

@Component({
  selector: 'app-preference-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preference-selector.component.html',
  styleUrl: './preference-selector.component.scss'
})
export class PreferenceSelectorComponent implements OnInit {
  @Input() selectedPreferences: string[] = [];

  preferences$: Observable<Preference[]> = this.preferenceService.getPreferences();
  preferences: Preference[] = [];

  constructor(private preferenceService: PreferenceService) {}

  ngOnInit(): void {
    this.preferences$.subscribe(prefs => {
      this.preferences = prefs;
    });
  }

  togglePreference(preferenceId: string): void {
    const index = this.selectedPreferences.indexOf(preferenceId);
    if (index > -1) {
      this.selectedPreferences.splice(index, 1);
    } else {
      this.selectedPreferences.push(preferenceId);
    }
  }

  isSelected(preferenceId: string): boolean {
    return this.selectedPreferences.includes(preferenceId);
  }
}

