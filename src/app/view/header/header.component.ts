import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  @Output() activeButton = new EventEmitter<string>()

  btnSettings = [{
    style:'active',
    label:'Current Rate',
    id:'latest'
  },
  {
    style:'headers',
    label:'Historical Rate',
    id:'history'
  }
]

  constructor() { }

  logbtn(e:number){
   this.activeButton.emit(this.btnSettings[e].id);
   this.btnSettings.map((val,idx):any=>{
      return  idx == e ? val.style = 'active' : val.style = 'headers'
    })
  }


}
