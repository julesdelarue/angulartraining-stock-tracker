import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StockTrackingService} from "../../shared/services/stock-tracking.service";

@Component({
  selector: 'app-track-stock-form',
  templateUrl: './track-stock-form.component.html'
})
export class TrackStockFormComponent implements OnInit {

  trackStockForm = this.fb.group({
    // Business rule : Stock symbol is a 1 to 5-letter code
    // TODO add async validator to check if symbol exists
    symbol: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(5)]]
  });

  constructor(private fb: FormBuilder, private stockTrackingService:StockTrackingService) {
  }

  ngOnInit(): void {
  }

  /**
   * STEP #1 Store the entered stock symbol in local storage
   */
  trackStock(): void {
    this.stockTrackingService.addStockSymbol(this.trackStockForm.get('symbol')?.value);
    this.trackStockForm.reset();
  }
}
