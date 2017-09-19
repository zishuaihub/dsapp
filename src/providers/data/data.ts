import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }
  getData(){
    return this.http.get("http://www.lexbst.com/server.php/api/v1/supplier/main?agent_id=1&main=1&scale=0").map(res=>res.json());
  }

}
