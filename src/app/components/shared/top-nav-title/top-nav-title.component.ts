import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-title',
  standalone: true,
  imports: [],
  templateUrl: './top-nav-title.component.html',
  styleUrl: './top-nav-title.component.scss'
})
export class TopNavTitleComponent {
  @Input() title: string = '';
  @Output() discardClick = new EventEmitter<void>();
}

