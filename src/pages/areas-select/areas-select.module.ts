import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreasSelectPage } from './areas-select';

@NgModule({
  declarations: [
    AreasSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(AreasSelectPage),
  ],
})
export class AreasSelectPageModule {}
