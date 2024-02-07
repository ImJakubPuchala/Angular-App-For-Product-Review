import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { ReviewFormComponent } from './Components/review-form/review-form.component';

@NgModule({
  declarations: [AppComponent, SearchProductComponent, ReviewFormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
