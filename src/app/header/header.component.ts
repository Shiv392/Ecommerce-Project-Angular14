import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CartService } from '../cart.service';
import { SearchkeyService } from '../searchkey.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalitem:number=0;
  searchvalue:string='';
  constructor(private cartService:CartService){}
ngOnInit(){
  this.cartService.getProducts()
  .subscribe(res=>{
  this.totalitem=res.length;
  console.log(this.searchvalue);
  
  })
}
search(e:any){
this.searchvalue=(e.target as HTMLInputElement).value;
this.cartService.search.next(this.searchvalue); //emiting searchi value to all components

}

}

