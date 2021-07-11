import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ConverterService } from './converter.service';
import {
  CurrencyShape,
  DateRangeCurrencyReq,
  LatestCurrencyReq,
} from './models/converter-req';

export interface CurrencyState {
  state: CurrencyShape | null;
  currenctBaseCurrency: string | undefined;
  TargetCurrency: string | undefined;
  amount: number | undefined;
}

const defaultState: CurrencyState = {
  state: null,
  currenctBaseCurrency: undefined,
  TargetCurrency: undefined,
  amount: undefined,
};

@Injectable()
export class ConverterStateStore extends ComponentStore<CurrencyState> {
  constructor(private _service: ConverterService) {
    super(defaultState);
  }

  public readonly vm$ = this.select((state) => state);

  public readonly resetState = this.updater((state) => {
    return (state = defaultState);
  });

  private addCurrenyState = this.updater(
    (data, state: CurrencyShape | null) => ({
      ...data,
      state,
    })
  );

  private addCurrentBaseCurrency = this.updater(
    (state, baseCurrency: string) => ({
      ...state,
      currenctBaseCurrency: baseCurrency,
    })
  );

  private addTargetCurrency = this.updater((state, TargetCurrency: string) => ({
    ...state,
    TargetCurrency,
  }));

  private addAmount = this.updater((state, amount: number) => ({
    ...state,
    amount,
  }));

  readonly getLatestCoversion = this.effect(
    (req$: Observable<LatestCurrencyReq>) => {
      return req$.pipe(
        switchMap((req) =>
          this._service.convertLatest(req).pipe(
            tapResponse(
              (res) => {
                this.updateState(req, res);
              },
              (error) => console.log(error)
            )
          )
        )
      );
    }
  );

  readonly getCoversionByDate = this.effect(
    (req$: Observable<DateRangeCurrencyReq>) => {
      return req$.pipe(
        switchMap((req) =>
          this._service.convertByDate(req).pipe(
            tapResponse(
              (res) => {
                this.updateState(req, res);
              },
              (error) => console.log(error)
            )
          )
        )
      );
    }
  );

  updateState(req: any, res: any) {
    this.addCurrenyState(res);
    this.addCurrentBaseCurrency(res.base);
    this.addTargetCurrency(req.symbols.substring(0, 3));
    this.addAmount(req.amount);
  }
}
