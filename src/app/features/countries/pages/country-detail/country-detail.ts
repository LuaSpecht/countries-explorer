import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './country-detail.html',
})
export class CountryDetailComponent {
  country: any = null;
  loading = true;
  error = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const code = params.get('code');
      if (!code) return;

      this.fetchCountry(code);
    });
  }

  fetchCountry(code: string) {
    this.loading = true;
    this.error = false;

    const url =
    `https://restcountries.com/v3.1/alpha/${code}` +
    `?fields=name,capital,region,subregion,population,flags,continents,currencies,languages,borders,cca3`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        console.log('DETAIL NEXT raw:', data);
      
        this.country = Array.isArray(data) ? data[0] : data;
        console.log('DETAIL country parsed:', this.country?.name?.common);
      
        this.loading = false;
        this.cdr.detectChanges();
        console.log('DETAIL loading false');
      },
      error: (err) => {
        console.error('DETAIL ERROR:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  getCurrencyList(): string[] {
    const c = this.country?.currencies;
    if (!c) return [];
    return Object.values(c).map((x: any) => x?.name).filter(Boolean);
  }

  getLanguageList(): string[] {
    const l = this.country?.languages;
    if (!l) return [];
    return Object.values(l);
  }
}