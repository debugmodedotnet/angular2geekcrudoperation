import { Component,OnInit } from '@angular/core';
import {Geek} from '../shared/geek';
import {DataService} from '../shared/data.service';


@Component({
    moduleId:module.id,
    selector:'homegeek',
    templateUrl:'homegeek.component.html'
   
})

export class HomeGeekComponent implements OnInit{

      geeks:Geek[];
      errorMessage : any[];
      constructor(private  dataService: DataService){


      }

      getGeeks() {
          console.log("in get Geeks");
                  this.dataService.getGeeks()
                   .subscribe(
                     geeks => this.geeks = geeks,
                     error =>  this.errorMessage = <any>error);
                 }


    ngOnInit(){

        console.log("enter");

            this.getGeeks();

    }
}