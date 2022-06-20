import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * LocalStorage implementation
   */

  STOCK_KEY = "STOCKLIST";
  STOCK_SEPARATOR = ";";

  constructor() { }

  /**
   * Add stock to localStorage
   * @param stockSymbol
   */
  addStock(stockSymbol:string):void{
    const stockList = localStorage.getItem(this.STOCK_KEY)

    if(!stockList){
      localStorage.setItem(this.STOCK_KEY, stockSymbol)
    }else{
      localStorage.setItem(this.STOCK_KEY, `${stockList}${this.STOCK_SEPARATOR}${stockSymbol}`)
    }
  }


  /**
   * Remove stock from localStorage
   * @param stockSymbol
   */
  removeStock(stockSymbol:string):void{
    const stockList = localStorage.getItem(this.STOCK_KEY)
    if(stockList){
      localStorage.setItem(this.STOCK_KEY, stockList.split(this.STOCK_SEPARATOR).filter((stock => stock !== stockSymbol)).join(this.STOCK_SEPARATOR))
    }
  }

  /**
   * Retrieve stored stock
   */
  getStockList():string[] {
    const stockList = localStorage.getItem(this.STOCK_KEY)
    if(stockList){
      return stockList.split(this.STOCK_SEPARATOR)
    }
    return [];
  }
}
