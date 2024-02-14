import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

import { MenuComponent } from './shared';

// Configuración local de la APP
import localeEsGT from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsGT);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: ` <app-menu /> <router-outlet />`,
  styles: [],
})
export class AppComponent {
  // title = 'hAnsS espiNOzA';

  #primeNgConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this.#primeNgConfig.ripple = true;
  }
}
