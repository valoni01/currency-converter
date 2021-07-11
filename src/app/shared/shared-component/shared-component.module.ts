import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ButtonComponent,InputComponent,SelectComponent]
})
export class SharedComponentModule { }
