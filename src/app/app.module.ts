import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseImageCardComponent } from './components/course-image-card/course-image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
