import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy} 
    from '@angular/core';

import { Product } from '../products.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.components.html',
  styleUrls: ['./product.components.scss']

})

export class ProductComponent implements OnChanges, OnInit, DoCheck,OnDestroy{
 @Input() product!: Product;
 @Output() productClicked: EventEmitter<any> = new EventEmitter();

 today = new Date()
 
 constructor() {
     console.log('1.  constructor');
 }

 ngOnChanges(change: SimpleChanges){
    console.log('2.  ngOnChanges');
    console.log(change);
 }

 ngOnInit(){
    console.log("3.  ngOnInit")
 }

 ngDoCheck(){
     console.log("4. ngDoCheck")
 }
ngOnDestroy(){
    console.log("5. ngOnDestroy")
}
 addCart(){
     console.log("Añadir al Carrito");
     this.productClicked.emit(this.product.id);
 }
}