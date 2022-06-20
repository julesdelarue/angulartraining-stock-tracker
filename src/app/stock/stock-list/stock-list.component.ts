import { Component, OnInit } from '@angular/core';
import {StockTrackingService} from "../../shared/services/stock-tracking.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html'
})
export class StockListComponent implements OnInit {

  stockList?:Observable<string[]>;

  constructor(private stockService:StockTrackingService) {
    this.stockList = this.stockService.getStockSymbolList();
  }

  ngOnInit(): void {
  }

}
