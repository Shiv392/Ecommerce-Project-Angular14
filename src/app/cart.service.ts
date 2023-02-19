import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];  //
  public productList=new BehaviorSubject<any>([]);  //to send and recive data,behaviour subjects
public search=new BehaviorSubject<string>("");  //to emit searchvalue of header component

  constructor() { }

  getProducts(){    //getter
    return this.productList.asObservable();
  }

  setProducts(products:any){   //setter
    this.cartItemList.push(...products);   //pushing value to the cartarray
    this.productList.next(products);  //sending data to the observable;//emiting data
  }

  addToCart(products:any){   //
    this.cartItemList.push(products);  //adding products to cart
    this.productList.next(this.cartItemList);  //emiting
    this.getTotalPrice();
    console.log(this.cartItemList);
    
  }
  getTotalPrice():number{    //to get total price
  let grandTotal=0;
  this.cartItemList.map((x:any)=>{
    grandTotal+=x.total;
  })
  return grandTotal;
  }

removeCartItem(products:any){  //for deleting one cart
  this.cartItemList.map((a:any,index:any)=>{
    if(products.id===a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}
    
removeAllCart(){   //to delete all value from cart
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}


}
