import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
//to store comming value and display in the table
public product:any=[];
public grandTotal!:number;

constructor(private cartService:CartService){}
ngOnInit(){
this.cartService.getProducts()
.subscribe(res=>{
  this.product=res;   //store all coming data into products
  this.grandTotal=this.cartService.getTotalPrice();
})
}
removeItem(item:any){
this.cartService.removeCartItem(item);
}
emptyCart(){
  this.cartService.removeAllCart();
}

}
