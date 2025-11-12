import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    }
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss'
})
export class DateTimePickerComponent implements ControlValueAccessor {
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

