export enum countries {
  USD = 'USD',
  EUR = 'EUR',
  CHF = 'CHF',
  AED = 'AED',
  BTC = 'BTC',
  GBP = 'GBP'
}

export interface CurrencyShape {
  success: boolean;
  timestamp: string;
  base: string;
  date: string;
  rates: { [key: string]: number };
}

export interface LatestCurrencyReq {
  base: string;
  symbols: string;
  amount: string;
}

export interface DateRangeCurrencyReq {
  base: string;
  symbols: string;
  date: string;
  amount: string;
}
