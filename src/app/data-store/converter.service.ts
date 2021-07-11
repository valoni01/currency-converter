import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CurrencyShape,
  DateRangeCurrencyReq,
  LatestCurrencyReq,
} from './models/converter-req';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  baseUrl = environment.baseUrl;
  defaultCurrencies = ',USD,EUR,AED,CAD,GBP';

  constructor(private http: HttpClient) {}

  convertLatest(request: LatestCurrencyReq): Observable<CurrencyShape> {
    let params = new HttpParams();
    request.symbols = request.symbols + this.defaultCurrencies;
    params = params
      .append('base', request.base)
      .append('symbols', request.symbols);
    return this.http.get<CurrencyShape>(`${this.baseUrl}latest`, { params });
  }

  convertByDate(request: DateRangeCurrencyReq) {
    request.symbols = request.symbols + this.defaultCurrencies;
    let params = new HttpParams();
    params = params
      .append('base', request.base)
      .append('symbols', request.symbols);
    return this.http.get<CurrencyShape>(`${this.baseUrl}${request.date}`, {
      params,
    });
  }
}
