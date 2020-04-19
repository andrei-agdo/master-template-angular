import { HttpModule } from './../../../core/modules/http.module';
import { DirectivesModule } from './../../../core/modules/directives.module';
import { MaterialModule } from './../../../core/modules/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    DirectivesModule,
    HttpModule
  ],
  exports: [
    MaterialModule,
    DirectivesModule
  ]
})
export class SharedModule { }
