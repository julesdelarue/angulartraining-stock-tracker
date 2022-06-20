import { Injectable } from '@angular/core';
import {StorageService} from "../../core/storage.service";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {FinnhubAPIService} from "./finnhub-api.service";
import {ISentiment} from "../model/sentiment.model";
import {IStock} from "../model/stock.model";

@Injectable({
  providedIn: 'root'
})
export class StockTrackingService {

  private stockSymbolList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.storageService.getStockList());

  constructor(private storageService:StorageService,
              private finnhubAPIService:FinnhubAPIService) {
  }

  addStockSymbol(stockSymbol:string):void{
    if(!this.stockSymbolList$.value.includes(stockSymbol)){
      this.stockSymbolList$.next([...this.stockSymbolList$.value, stockSymbol]);
      this.storageService.addStock(stockSymbol);
    }
  }

  removeStockSymbol(stockSymbol:string):void{
    this.stockSymbolList$.next(this.stockSymbolList$.value.filter(symbol => symbol !== stockSymbol));
    this.storageService.removeStock(stockSymbol);
  }

  getStockSymbolList():Observable<string[]>{
    return this.stockSymbolList$.asObservable()
  }

  fetchSentimentInformation(symbol:string, from:string, to:string): Observable<ISentiment>{
    return combineLatest([this.finnhubAPIService.sentiment(symbol, from, to),
      this.finnhubAPIService.profile(symbol)]).pipe(
      map(([sentiment, profile]) =>{
        return <ISentiment>{
          ...sentiment,
          name:profile.name
        }}
    ));
  }

  fetchStockInformation(stockSymbol:string):Observable<IStock>{
    //Aggregate company name and quote data
    return combineLatest([this.finnhubAPIService.quote(stockSymbol), this.finnhubAPIService.profile(stockSymbol)]).pipe(
      map(([quote, search]) =>{
        return <IStock>{
          // Avoid unrelated names by using profile endpoint instead of search endpoint
          name: search.name,
          symbol:stockSymbol,
          changeToday: quote.dp,
          currentPrice: quote.c,
          highPrice: quote.h,
          openingPrice: quote.o
        }
      })
    )
  }
}
