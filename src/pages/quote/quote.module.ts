import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotePages } from './quote';

@NgModule({
  declarations: [
    QuotePages,
  ],
  imports: [
    IonicPageModule.forChild(QuotePages),
  ],
})
export class QuoteModule {}
