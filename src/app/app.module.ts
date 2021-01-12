import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { CreatingFormComponent } from './creating-form/creating-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreatingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
