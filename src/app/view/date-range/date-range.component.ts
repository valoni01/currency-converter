import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConverterStateStore, CurrencyState } from 'src/app/data-store/converter.store';
import { countries } from 'src/app/data-store/models/converter-req';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent  {

  currencyForm!: FormGroup;
  ListOfCountries = countries;

  constructor(private fb:FormBuilder,private _curStore:ConverterStateStore) {
    this.initForm()
   }


  initForm(){
    this.currencyForm = this.fb.group({
       base:'',
       symbols:'',
       amount:'',
       date:'',
    })
  }


  convertByDate(){
    this._curStore.getCoversionByDate(this.currencyForm.value)
  }


}
