import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component'

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
