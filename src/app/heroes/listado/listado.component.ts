import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[]= ['andres','daniel','goku','valeria','Capitan america'];
  deleheroe :string = '';
borrarArray (){

 this.deleheroe  = this.heroes.pop() || '';
 



}


}
