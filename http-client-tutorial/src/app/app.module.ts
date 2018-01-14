import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoNothingInterceptor } from './services/demo-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions()
  ],
  providers: [
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DoNothingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
