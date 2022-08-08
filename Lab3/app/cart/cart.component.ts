import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getCartItem();
  total = this.cartService.getTotalPrice();
  totalprice = this.cartService.getTotalPrice();


  delete(pid: any){
    this.cartService.deleteItem(this.items);
    this.total = 0;
    this.totalprice = 0;
  }

  deleteCart(){
    this.items = []
    this.cartService.clearCart()
    this.total = 0;
    this.totalprice = 0;
  }

  cartItem: CartItem | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
