import {IInsiderSentiment} from "./finnhub/insider-sentiment.model";

export interface ISentiment extends IInsiderSentiment{
  name:string;
}
