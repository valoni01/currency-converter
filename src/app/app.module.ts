import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './shared/shared-component/shared-component.module';
import { HeaderComponent } from './view/header/header.component';
import { LatestComponent } from './view/latest/latest.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqinterceptorInterceptor } from './coreModule/http-reqinterceptor.interceptor';
import { DateRangeComponent } from './view/date-range/date-range.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { ConverterPipe } from './shared/converter.pipe';
import { DataViewComponent } from './view/data-view/data-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestComponent,
    DateRangeComponent,
    ConverterPipe,
    DataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveComponentModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpReqinterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
