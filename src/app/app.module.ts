import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthHttpInterceptor} from './auth/auth-http-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [
    // tslint:disable-next-line:max-line-length
    {provide : HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor , multi: true} // override the dependency injection system that if anyone else asks for HTTP_INTERCEPTORS, make sure to give this copy of our class too
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
