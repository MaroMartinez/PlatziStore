import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    title = 'store';
    
    items = ['maro','jose','yeiber'];
  
    
    ngOnInit(){
      //code
    }
    additem() {
      this.items.push('nuevo item');
    } 
    deleteitem(index: number){
      this.items.splice(index, 1)
    }
}
