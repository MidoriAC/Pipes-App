import { Component, signal } from '@angular/core';
import {
  UpperCasePipe,
  TitleCasePipe,
  LowerCasePipe,
  DatePipe,
} from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

//? Configuración de local de la app
import localeEsAr from '@angular/common/locales/es-AR';
import localeFaCa from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsAr);
registerLocaleData(localeFaCa);

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe,
  ],
  template: `
    <p-panel header="Pipes Básicos" class="p-1">
      <p>Pipes incluidos en Angular - En el Common Module</p>
    </p-panel>
    <div class="grid">
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="uppercase">
          {{ nameLower() | uppercase }}
        </p-card>
      </div>
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="lowercase">
          {{ nameUpper() | lowercase }}
        </p-card>
      </div>
      <div class="col-12 sm:col-6 md:col-4">
        <p-card header="titlecase">
          {{ nameTitle() | titlecase }}
        </p-card>
      </div>
      <div class="col-12 sm:col-6">
        <p-card header="Date title">
          <ol>
            <li>fecha</li>
            <li>fecha | date</li>
            <li>fecha | date:'short'</li>
            <li>fecha | date:'long'</li>
            <li>fecha | date:'MMMM'</li>
            <li>fecha | date:'MMMM dd, yyyy'</li>
          </ol>
          <hr />
          <ol>
            <li>fecha | date:'long':'GMT-6'</li>
            <li>fecha | date:'long':'GMT-4'</li>
            <li>fecha | date:'long':'':'es-AR'</li>
            <li>fecha | date:'long':'':'fr-CA'</li>
          </ol>
        </p-card>
      </div>
      <div class="col-12 sm:col-6">
        <p-card header="Date">
          <ol>
            <li>{{ customDate() }}</li>
            <li>{{ customDate() | date }}</li>
            <li>{{ customDate() | date : 'short' }}</li>
            <li>{{ customDate() | date : 'long' }}</li>
            <li>{{ customDate() | date : 'MMMM' }}</li>
            <li>{{ customDate() | date : 'MMMM dd, yyyy' }}</li>
          </ol>
          <hr />
          <ol>
            <li>{{ customDate() | date : 'long' : 'GMT-6' }}</li>
            <li>{{ customDate() | date : 'long' : 'GMT-4' }}</li>
            <li>{{ customDate() | date : 'long' : '' : 'es-AR' }}</li>
            <li>{{ customDate() | date : 'long' : '' : 'fr-CA' }}</li>
          </ol>
        </p-card>
      </div>
    </div>
  `,
  styles: ``,
})
export class BasicsPageComponent {
  public nameLower = signal<string>('hanss');
  public nameUpper = signal<string>('HANSS');
  public nameTitle = signal<string>('hanss ESPINOZA');

  public customDate = signal<Date>(new Date());
}
