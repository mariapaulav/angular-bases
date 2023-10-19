import { Component, OnInit } from '@angular/core';
import { countries } from '../countriesCode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'Mi first app';

  ngOnInit(): void {}

  findCountryCode(inputCode: string): string | null {
    for (const country of countries) {
      for (const code in country) {
        if (code === inputCode) {
          return `fis fi fi-${country[code]}`;
        }
      }
    }
    return null;
  }
}
