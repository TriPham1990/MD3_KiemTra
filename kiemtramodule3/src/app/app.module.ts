import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import {FormsModule} from "@angular/forms";
import { ReadlistComponent } from './readlist/readlist.component';
import { IsreadingComponent } from './isreading/isreading.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    ReadlistComponent,
    IsreadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
