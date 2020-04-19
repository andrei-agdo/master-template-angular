import { Http } from './../services/http.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
   imports: [
      HttpClientModule
   ],
   providers: [
      Http
   ]
})
export class HttpModule { }