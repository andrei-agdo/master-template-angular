import { IpadCheckDirective } from '../../shared/directives/ipad-check.directive';
import { MobileCheckDirective } from '../../shared/directives/mobile-check.directive';

import { NgModule } from '@angular/core';
@NgModule({
   declarations:[MobileCheckDirective,IpadCheckDirective],
   exports:[MobileCheckDirective,IpadCheckDirective]
})
export class DirectivesModule { }