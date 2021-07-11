import { Component, Input } from '@angular/core';
import { CurrencyState } from 'src/app/data-store/converter.store';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent  {

  @Input() dataView!: CurrencyState;

  constructor() { }



}
