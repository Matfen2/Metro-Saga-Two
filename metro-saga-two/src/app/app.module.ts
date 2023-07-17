import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMetroComponent } from './component/show-metro/show-metro.component';
import { ShowModalComponent } from './component/show-modal/show-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMetroComponent,
    ShowModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
