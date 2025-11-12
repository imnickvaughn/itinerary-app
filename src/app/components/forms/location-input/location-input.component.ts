import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationInputComponent),
      multi: true
    }
  ],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.scss'
})
export class LocationInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';

  control = new FormControl('');
  private onChange = (value: string) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      if (value !== null) {
        this.onChange(value);
      }
    });
  }

  writeValue(value: string): void {
    this.control.setValue(value || '', { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

