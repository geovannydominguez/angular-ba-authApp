import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// interceptors & auth-gaurd
import { HttpInterceptorProviders } from './auth/interceptors/interceptor-provider';
import { ValidarTokenGuard } from './guards/validar-token.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Para peticiones HTTP
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ValidarTokenGuard,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
