import { Injectable } from '@angular/core';
import {Geek} from './geek';
import {Http,Headers,RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService{

apiUrl : string = "http://localhost:39320/api/geeks";

constructor(private _http:Http) { }


  addGeek(geek:Geek){
       let body = JSON.stringify(geek);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post(this.apiUrl,
                     body, options)
                    .map(this.extractData);                    
  }


getGeeks (): Observable<Geek[]> {
  console.log("new service");
  return this._http.get(this.apiUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
}


 private extractData(res: Response) {
  let body = res.json();
  return body || { };
}

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


}