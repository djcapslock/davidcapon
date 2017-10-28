import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { BlogFeedsService } from './blog-feeds.service';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatTabsModule, HttpModule, JsonpModule
  ],
  providers: [BlogFeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
