import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakemoneyPage } from './makemoney';

@NgModule({
  declarations: [
    MakemoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(MakemoneyPage),
  ],
})
export class MakemoneyPageModule {}
