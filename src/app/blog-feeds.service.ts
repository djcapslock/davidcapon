import { Injectable } from '@angular/core';
/*import { Http, Response } from '@angular/http';*/
/*private http: Http*/
import { Jsonp } from '@angular/http';

@Injectable()
export class BlogFeedsService {

  _blogArticles: any;

  constructor(private jsonp: Jsonp) {
  }

  getFeedContent() {
    return this.jsonp
      .request('http://david-james-capon.blogspot.com/feeds/posts/default?alt=json&callback=JSONP_CALLBACK')
      .toPromise();
    /*.subscribe(response => console.log(response.text()));*/
    /*.map(response => return response);*/
    /*this._blogArticles = response.text()*/
    /* return this._blogArticles;*/
  }
}
