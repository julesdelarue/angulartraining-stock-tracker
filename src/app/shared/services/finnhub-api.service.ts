import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ISearchSymbolResult} from "../model/finnhub/search-symbol-result.model";
import {IQuote} from "../model/finnhub/quote.model";
import {IInsiderSentiment} from "../model/finnhub/insider-sentiment.model";
import {ICompanyProfile} from "../model/finnhub/company.model";

@Injectable({
  providedIn: 'root'
})
export class FinnhubAPIService {
  /**
   * Implementation of FinnHubApi for searching & retrieving stock data
   * Used endpoints:
   *  https://finnhub.io/docs/api/symbol-search
   *  https://finnhub.io/docs/api/quote
   *  https://finnhub.io/docs/api/stock/insider-sentiment
   *  https://finnhub.io/docs/api/stock/profile2
   */

  API_URL = "https://finnhub.io/api/v1/";

  constructor(private httpClient: HttpClient) {
  }

  search(value: string): Observable<ISearchSymbolResult> {
    return this.httpClient.get<ISearchSymbolResult>(this.API_URL + "search",
      {
        params: this.initParams().append('q', value)
      })
  }

  quote(symbol: string): Observable<IQuote> {
    return this.httpClient.get<IQuote>(this.API_URL + "quote",
      {
        params: this.initParams().append('symbol', symbol)
      })
  }

  profile(symbol:string):Observable<ICompanyProfile>{
    return this.httpClient.get<ICompanyProfile>(this.API_URL + "stock/profile2",
      {
        params: this.initParams().append('symbol', symbol)
      })
  }

  sentiment(symbol: string, from: string, to: string): Observable<IInsiderSentiment>{
    return this.httpClient.get<IInsiderSentiment>(this.API_URL + "stock/insider-sentiment",
      {
        params: this.initParams()
          .append('symbol', symbol)
          .append('from', from)
          .append('to', to)
      })
  }

  private initParams():HttpParams{
    return new HttpParams().append('token', environment.finnhub_api_key);
  }
}
