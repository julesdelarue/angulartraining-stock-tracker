import {Component, Input, OnInit} from '@angular/core';
import {StockTrackingService} from "../../shared/services/stock-tracking.service";
import {IStock} from "../../shared/model/stock.model";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html'
})
export class StockCardComponent implements OnInit {

  @Input() stockSymbol!: string;

  stockData:IStock | undefined;

  constructor(
    private stockService:StockTrackingService
  ) {
  }

  ngOnInit(): void {
    this.stockService.fetchStockInformation(this.stockSymbol)
      .subscribe({
        next: data => this.stockData = data,
        error: e => console.error(e)
      });
  }

  removeStock() {
    this.stockService.removeStockSymbol(this.stockSymbol)
  }
}
