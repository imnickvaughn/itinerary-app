import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() checked: boolean = false;
  @Input() name: string = '';

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onToggle(): void {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}

