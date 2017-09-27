import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesPages } from './quotes';

@NgModule({
  declarations: [
    QuotesPages,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPages),
  ],
})
export class QuotesModule {}
