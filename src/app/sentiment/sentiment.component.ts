import {Component, OnInit} from '@angular/core';
import {StockTrackingService} from "../shared/services/stock-tracking.service";
import {ActivatedRoute} from "@angular/router";
import {filter, switchMap} from "rxjs";
import {DatePipe} from "@angular/common";
import {ISentiment} from "../shared/model/sentiment.model";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  providers: [DatePipe]
})
export class SentimentComponent implements OnInit {

  sentimentData: ISentiment | undefined;

  constructor(private stockService: StockTrackingService,
              protected activatedRoute: ActivatedRoute,
              private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    const toDate = new Date();
    const from = new Date().setMonth(toDate.getMonth() - 2);

    this.activatedRoute.params.pipe(
      filter(e => e["symbol"]),
      switchMap(e => this.stockService.fetchSentimentInformation(e["symbol"],
        this.datePipe.transform(from, 'yyyy-MM-dd')!,
        this.datePipe.transform(toDate, 'yyyy-MM-dd')!))
    )
      .subscribe({
        next: data => this.sentimentData = data,
        error: e => console.error(e)
      })
  }

  previousState() {
    window.history.back();
  }
}
