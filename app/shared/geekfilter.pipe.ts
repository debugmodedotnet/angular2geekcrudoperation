import {Pipe, PipeTransform} from  '@angular/core';
import {Geek} from './geek';
@Pipe({
    name: 'filter'
})
export class GeekFilterPipe implements PipeTransform {
  

    transform(geeks:Geek[],term:any):any{

        if(term==undefined){
            return geeks; 
        }

        return geeks.filter(function(g){
            return g.Name.toLowerCase().includes(term.toLowerCase());
        })
    }


}