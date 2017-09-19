import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsitemsPage } from './goodsitems';

@NgModule({
  declarations: [
    GoodsitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsitemsPage),
  ],
})
export class GoodsitemsPageModule {}
