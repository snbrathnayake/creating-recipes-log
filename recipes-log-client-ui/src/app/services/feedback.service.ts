import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FeedbackService {

  constructor(private app: AppService) { }

  getVote(id: string): Observable<any[]> {
    const result = new Subject<any>();
    const { app } = this;

    app.getService(this.feedbackPrefix)
    .subscribe((feed: any[]) => {
      console.log(feed);
      result.next(feed)
    })
    return result;
  }

  addOrUpdateVote(): Observable<any> {
    const result = new Subject<any>();
    const { app } = this;

    return null;
  }

  private get feedbackPrefix(): string {
    return this.app.urlWithApiVersion('recipes/feedback/5ce2b1bc4183ae28a0076b56');
  }
}
