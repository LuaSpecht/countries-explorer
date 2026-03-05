import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-card.html',
})
export class CountryCardComponent {
  @Input() country: any;
}