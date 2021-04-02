
import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse ,HttpHeaders} from '@angular/common/http';




import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
/*import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/throw'

import 'rxjs/add/observable/toPromise'*/

const PASSEGER_API:string =`http://api.twitter.com/2/users/170615893/tweets`
const auth_token = 'AAAAAAAAAAAAAAAAAAAAAPLCOAEAAAAAfY9DBZXqzc2AGBPPH15IiYWLsho%3DTpINZgs4qey8Enb0XB6czsMQSe6O8ntaHAqUswrqWR0oqmXTSr'
@Injectable({
  providedIn: 'root'
})
export class ApitwitterService {

  constructor(private http:HttpClient) {
      console.log(http)
  }


  getPasajer(): Observable<any> {

    var reqHeader = new HttpHeaders({
     'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });

    let options = {
        headers: reqHeader
    }
    //return this.http.get<Passager[]>(PASSEGER_API);
    return this.http.get(PASSEGER_API,options);

    
   
  }

}
