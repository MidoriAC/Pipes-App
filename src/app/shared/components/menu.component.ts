import { Component, signal } from '@angular/core';

import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { OtherPageComponent } from '../../base';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  template: `
    <p-menubar [model]="menuItems()">
      <img src="./favicon.ico" alt="Angular Logo" />
    </p-menubar>
  `,
  styles: ``,
})
export class MenuComponent {
  menuItems = signal<MenuItem[]>([]);

  constructor() {
    this.#setMenu();
  }

  #setMenu(): void {
    this.menuItems.set([
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Otro elemento',
            icon: PrimeIcons.COG,
            routerLink: 'other',
          },
        ],
      },
    ]);
  }
}
