import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

  @Input() select?:any;
  @Output() emittedValue = new EventEmitter<string>();



  constructor() {

  }


  c:any
  emitValue(event:any){
    let c = event.target.value
    this.emittedValue.emit(event.target.value)
  }

}
