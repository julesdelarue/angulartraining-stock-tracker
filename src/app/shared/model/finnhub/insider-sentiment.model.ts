export interface IInsiderSentiment {
  data: Array<{
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
  }>,
  symbol: string;
}
