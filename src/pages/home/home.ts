import {Component, OnInit, ViewChild, ElementRef, Injector} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
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
  @ViewChild('areasSelect') areasSelect;

  ajaxData:Array<DataType>=[] ;
  city="合肥";
  constructor(public navCtrl: NavController,
              public dataProvider: DataProvider,protected rt: ElementRef, protected ij: Injector) {
  }


  ngOnInit(){
    this.dataProvider.getData().subscribe(res=>this.ajaxData=res.data)
  }
 //地图
  showAreasSelect() {
    this.areasSelect.open();
  }
  done(data) {
    console.log(JSON.stringify(data));
    this.city=data.data.city.text;
  }
  closeSelect() {
    console.log('you click close');
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


}
