import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Geek} from '../shared/geek';
import {DataService} from '../shared/data.service';

@Component({
    moduleId:module.id,
    selector:'addgeek',
    templateUrl:'addgeek.component.html'
})

export class AddGeekComponent{

    constructor(private _service:DataService, private _router : Router){
     
    }

   libraries = ['JavaScript','Angular','Node','React','IgniteUI'];   
   geekAdded  = false; 

   model = new Geek('','','',0,'',0);
  // model = {Id:'',Name:'',Library:'',Exp:'',Photo:'',Age:''};

   addGeek(){

       this.model.Id = Math.random().toString(36).substring(7);
       console.log(JSON.stringify(this.model));
       this.geekAdded = true; 
       this._service.addGeek(this.model).subscribe();
       console.log("Geek added");
       this._router.navigate(['/home']);
       
   }




}