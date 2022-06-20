import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrackStockFormComponent } from './stock/track-stock-form/track-stock-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockCardComponent } from './stock/stock-card/stock-card.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { SentimentComponent } from './sentiment/sentiment.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TrackStockFormComponent,
    StockListComponent,
    StockCardComponent,
    SentimentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent},
        { path: "sentiment/:symbol", component: SentimentComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
