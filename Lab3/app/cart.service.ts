import { EventEmitter, Injectable } from '@angular/core';
import { Product, products } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems: Product[] = [];
  totalprice = 0;
  quantity = 0;
  event: EventEmitter<null> = new EventEmitter();

  constructor() { }

  notifyDataChange() {
    this.event.emit();
  }

  addToCart(p: Product) { 
    let index = -1;
    index = this.cartitems.findIndex(l => l.id === p.id);
        if (index != -1){
          this.cartitems[index].quantity += 1;
        } else if(index === -1){
          this.cartitems.push(p)
        }
        this.sum();
        this.notifyDataChange();
      }

  getCartItem() {
    return this.cartitems;
  }

  getCartItemCount() {
    return this.cartitems.length;
  }

  getTotalPrice() {
    return this.totalprice;
  }

  clearCart(){
    this.cartitems = []
    this.notifyDataChange();
    this.totalprice = 0
    this.quantity = 0
    return this.cartitems
  }

  deleteItem(pid: any){
    let index = this.cartitems.findIndex(item => item.id === pid);
    this.cartitems.splice(index, 1);
    this.notifyDataChange();
    this.sum();

  }

  sum(): void {
    this.quantity = 0;
    this.totalprice = 0;
    if(this.cartitems){

      this.cartitems.map(
        products => {
        this.quantity += products.quantity
        this.totalprice += products.price * products.quantity
        }
        )

    }

  }
}
