import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacultyListComponent } from './components/faculty-list/faculty-list.component';
import { HttpClientModule } from '@angular/common/http'
import { FacultyService } from './services/faculty.service';

@NgModule({
  declarations: [
    AppComponent,
    FacultyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
