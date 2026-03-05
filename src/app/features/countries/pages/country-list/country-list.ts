import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CountryCardComponent } from '../../components/country-card/country-card';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CountryCardComponent
  ],
  templateUrl: './country-list.html'
})
export class CountryListComponent {

  countries: any[] = [];
  filteredCountries: any[] = [];
  regions: string[] = [];

  searchTerm = '';
  selectedRegion = '';

  loading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3,borders'
    ).subscribe({
      next: (data) => {
        this.countries = data;
        this.regions = Array.from(new Set(data.map(c => c.region).filter(Boolean))).sort();
        this.filteredCountries = data.slice(0, 24);
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  filterCountries() {
  const term = this.searchTerm.trim().toLowerCase();

  this.filteredCountries = this.countries.filter(c => {
    const name = (c?.name?.common ?? '').toLowerCase();
    const matchesName = !term || name.includes(term);
    const matchesRegion = !this.selectedRegion || c.region === this.selectedRegion;
    return matchesName && matchesRegion;
  });
}
}