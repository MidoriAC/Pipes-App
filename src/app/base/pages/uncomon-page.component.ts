import { Component, signal } from '@angular/core';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';

import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    FieldsetModule,
    PanelModule,
    ButtonModule,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  template: `
    <p-panel header="Pipes no tan comunes" class="p-1">
      <p>Pipes incluidos en Angular - En el Common Module</p>
    </p-panel>
    <div class="grid">
      <div class="col-12 sm:col-6">
        <p-fieldset legend="i18nSelect Pipe" [toggleable]="true">
          <p>
            Saludos {{ name() }}, es un placer
            {{ gender() | i18nSelect : invitationMap }} a nuestro evento.
          </p>
          <p-button (click)="changeName()" label="Cambiar persona" />
        </p-fieldset>
      </div>
      <div class="col-12 sm:col-6">
        <p-fieldset legend="i18nPLural Pipe" [toggleable]="true">
          <p>
            Actualmente tenemos
            {{ clients().length | i18nPlural : clientsMap }} esperando
          </p>
          <p-button (click)="deleteClient()" label="Borrar cliente" />
        </p-fieldset>
      </div>
      <div class="col-12 sm:col-6">
        <p-fieldset legend="Slice Pipe" [toggleable]="true">
          <b>Original</b>
          <pre>{{ clients() }}</pre>
          <b>Slice:0:2</b>
          <pre>{{ clients() | slice : 0 : 2 }}</pre>
          <b>Slice:1:2</b>
          <pre>{{ clients() | slice : 1 : 2 }}</pre>
          <b>Slice:3:4</b>
          <pre>{{ clients() | slice : 3 : 4 }}</pre>
          <b>Slice:0:-1</b>
          <pre>{{ clients() | slice : 0 : -1 }}</pre>
          <b>Slice:0:-2</b>
          <pre>{{ clients() | slice : 0 : -2 }}</pre>
        </p-fieldset>
      </div>
      <div class="col-12 sm:col-6">
        <p-fieldset legend="JSON Pipe" [toggleable]="true">
          {{ person() | json }}
        </p-fieldset>
      </div>
      <div class="col-12 sm:col-6">
        <p-fieldset legend="KeyValue Pipe" [toggleable]="true">
          <ul>
            @for(item of person() | keyvalue; track item){
            {{
              item.key | titlecase
            }}
            {{
              item.value
            }}
            }
          </ul>
        </p-fieldset>
      </div>
      <div class="col-12 sm:col-6">
        <p-fieldset legend="Async Pipe" [toggleable]="true">
          <p>
            {{ myObservableTimer() | async }}
          </p>

          @if(!(myObservableTimer() | async)) { Resolviendo el observable }
          <pre>{{ myObservableTimer() | async }}</pre>

          @if(!(promiseValue() | async)) { Resolviendo la promesa }
          <pre>{{ promiseValue() | async }}</pre>
        </p-fieldset>
      </div>
    </div>
  `,
  styles: ``,
})
export class UncommonPageComponent {
  // i18nSelect
  public name = signal('Hanss');
  public gender = signal<'male' | 'female'>('male');

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeName(): void {
    this.name.set('Fiorela');
    this.gender.set('female');
  }

  // i18nPlural
  public clients = signal<string[]>([
    'German',
    'Keneth',
    'Julio',
    'Rufino',
    'Sandor',
    'Fernando',
    'Eduardo',
    'Gustavo',
    'Juan',
    'Abinadi',
  ]);

  public clientsMap = {
    '=0': 'no hay clientes',
    '=1': 'hay un cliente',
    '=2': 'hay dos clientes',
    '=3': 'hay tres clientes',
    other: 'tenemos # clientes',
  };

  public deleteClient(): void {
    this.clients.update((clients) => clients.slice(0, -1) as string[]);
  }
  //KeyUp Pipe
  public person = signal({
    name: 'Julio',
    age: 22,
    addres: 'El Quiché, Guatemala',
  });

  //ASYNC PIPE
  public myObservableTimer = signal<Observable<number>>(
    interval(2000).pipe(tap((value) => console.log('tap:', value)))
  );

  public promiseValue = signal<Promise<string>>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise resolved!');
        console.log('Tenemos data en la promesa');
        this.person.update((item) => ({ ...item, name: 'Otro nombre' }));
      }, 3500);
    })
  );
}
