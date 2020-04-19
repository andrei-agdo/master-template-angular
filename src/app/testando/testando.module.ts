import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestandoComponent } from './testando.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestandoComponent],
  exports:[TestandoComponent]
})
export class TestandoModule { }
