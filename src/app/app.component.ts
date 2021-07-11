import { Component } from '@angular/core';
import { ConverterStateStore } from './data-store/converter.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConverterStateStore],
})
export class AppComponent {
  title = 'currcalculator';
  activeV = 'latest';
  constructor(public convStore: ConverterStateStore) {}

  setActiveV(e: string) {
    this.convStore.resetState();
    this.activeV = e;
  }
}
