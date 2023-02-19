import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

 public productList:any=[];   //to store all products list
 public categoryfilter:any;
  searchkey:string='';
  constructor(private api:ApiService,private cartService:CartService){}

  ngOnInit():void{
  this.api.getProducts().subscribe(res=>{
    this.productList=res;
    this.categoryfilter=res;
   console.log(this.productList);
   this.productList.forEach((a:any)=> {
    if(a.category==="men's clothing"||a.category==="women's clothing"){
      a.category="fashion";
    }
    Object.assign(a,{quantity:1,total:a.price})
   });
   })
   this.cartService.search.subscribe(val=>{
    this.searchkey=val;
   })
 }

 addToCart(item:any){
this.cartService.addToCart(item);
 }


filter(category:string){
  this.categoryfilter=this.productList
  .filter((a:any)=>{
    if(a.category==category||category=='') return a;
  })
}

}
