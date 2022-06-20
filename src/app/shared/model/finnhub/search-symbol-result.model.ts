/**
 * cf. https://finnhub.io/docs/api/symbol-search
 */
export interface ISearchSymbolResult {
  count: number;
  result: ISymbol[];
}

export interface ISymbol {
  description: string; //  Symbol description
  displaySymbol: string; //Display symbol name.
  symbol: string; //Unique symbol used to identify this symbol used in /stock/candle endpoint.
  type: string; //Security type.
}
