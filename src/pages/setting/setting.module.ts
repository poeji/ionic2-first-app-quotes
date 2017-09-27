import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPages } from './setting';

@NgModule({
  declarations: [
    SettingPages,
  ],
  imports: [
    IonicPageModule.forChild(SettingPages),
  ],
})
export class SettingModule {}
