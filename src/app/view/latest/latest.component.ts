import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConverterStateStore } from 'src/app/data-store/converter.store';
import { countries } from 'src/app/data-store/models/converter-req';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent  {

  currencyForm!: FormGroup;
  ListOfCountries = countries;

  constructor(private fb:FormBuilder,private _curStore:ConverterStateStore) {
    this.initForm()
   }



  initForm(){
    this.currencyForm = this.fb.group({
       base:'',
       symbols:'',
       amount:['',Validators.required]
    })
  }


  convertData(){
    this._curStore.getLatestCoversion(this.currencyForm.value)
  }




}
