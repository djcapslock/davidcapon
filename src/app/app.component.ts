import { Component } from '@angular/core';
import { BlogFeedsService } from './blog-feeds.service';

/* This function is on the index.html file */
declare function LIRenderAll(): void;

class BlogPost {
  title;
  url;
  content;
  constructor(contentIn: any) {
    if (contentIn != null && contentIn !== undefined) {
      this.title = contentIn.title.$t;
      this.url = contentIn.link[4].href;
      this.content = contentIn.content.$t;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'David Capon\'s Computing Bio';
  blogPosts = Array<any>(); /* List of blog posts. Array of any variables. */
  feedContent: any; /*All objects are sub types of any, any variable can be assigned to a variable of type any. */
  /* Stores content of blog feed, before it is translated into blog posts array. */

  constructor(private _blogFeedsService: BlogFeedsService) {
    console.log(this._blogFeedsService.getFeedContent().then(
      response => {
        this.feedContent = response;
        console.log(response);
        for (let i = 0; i < this.feedContent._body.feed.entry.length; i = i + 1) {
          this.blogPosts.push(new BlogPost(this.feedContent._body.feed.entry[i]));
        }
      }
    ));
  }

  RemoveHTMLInfo(value: string) {
    if (value) {
      return value.replace(/<\/?[^>]+>/gi, '').substring(0, 200);
    }
  }

  TabClicked(event) {
    if (event.index === 2) {
      /*download content from linked in now that the tab that contains the div is open, and the script will be able to find the div*/
      LIRenderAll();
    }
  }

  ClickButton() {
    alert('hi!');
  }

  myEvent(event) {
    console.log(event);
  }
}


