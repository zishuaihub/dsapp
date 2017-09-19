import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {MessagePage} from "../message/message";
import {DataType} from "../../dataType";
import {NavPage} from "../nav/nav";
import {CategoryPage} from "../category/category";
import {GoodsitemsPage} from "../goodsitems/goodsitems";
import {MenuPage} from "../menu/menu";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  ajaxData:Array<DataType>=[] ;

  constructor(public navCtrl: NavController,
              public dataProvider: DataProvider) {
  }


  ngOnInit(){
    this.dataProvider.getData().subscribe(res=>this.ajaxData=res.data)
  }


  openMassage(){
    this.navCtrl.push(MessagePage);
  }
  openNav(link,img){
    this.navCtrl.push(NavPage,{
      link:link,
      img:img
    })
  }
  openMenuPage(title){
    this.navCtrl.push(MenuPage,{
      title:title
    })
  }
  openCategory(name){
    this.navCtrl.push(CategoryPage,{
      name:name
    })
  }
  openGoodsitems(name,address){
    this.navCtrl.push(GoodsitemsPage,{
      name:name,
      address:address
    })
  }
  showAreasSelect(){

  }

}
