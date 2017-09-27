import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryPages } from './library';

@NgModule({
  declarations: [
    LibraryPages,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPages),
  ],
})
export class LibraryModule {}
