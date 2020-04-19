import { TestandoModule } from './testando/testando.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { Interceptor } from './core/modules/interceptor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    Interceptor,
    SharedModule,
    TestandoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
