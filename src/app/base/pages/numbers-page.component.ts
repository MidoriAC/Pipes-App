import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PanelModule, CardModule, DecimalPipe, CurrencyPipe, PercentPipe],
  template: `
    <p-panel header="Pipes numéricos" class="p-1">
      <p>Pipes incluidos en Angular - En el Common Module</p>
    </p-panel>
    <div class="grid">
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="Ventas Netas" subheader="2024">
          {{ totalSells() | number : '1.2-2' }}
        </p-card>
      </div>
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="Ventas Brutas" subheader="2024">
          {{ totalSells() | currency : 'GTQ' : 'symbol-narrow' : '1.2-2' }}
        </p-card>
      </div>
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="Ganancia Porcentual" subheader="2024">
          {{ percent() | percent : '1.2-2' }}
        </p-card>
      </div>
    </div>
  `,
  styles: ``,
})
export class NumbersPageComponent {
  public totalSells = signal<number>(2567789.5567);
  public percent = signal<number>(0.4856);
}
