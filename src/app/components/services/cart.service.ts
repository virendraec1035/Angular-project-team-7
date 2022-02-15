
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] =[];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity:Subject<number> = new Subject<number>();

  constructor() { }
  addToCart(thecartItem:CartItem){
    console.log('product is already exist');
// check if we already have the item in our cart
let alreadyExistInCart: boolean=false;

let exixtingCartItem :CartItem=undefined;

if(this.cartItems.length>0){
//find the iem in the cart based on item id
for(let tempCartItem of this.cartItems){
  if(tempCartItem.id ===thecartItem.id){
    exixtingCartItem = tempCartItem;
    break;
  }
}


//check if we found it
  alreadyExistInCart =(exixtingCartItem != undefined);

  }
  if(alreadyExistInCart){
    exixtingCartItem.quantity++;
  }
  else{
    //add the item to the array
    this.cartItems.push(thecartItem);
  }
  // compute cart total price and total quantity
  this.computeCartTotals();
}
  computeCartTotals() {

    let totalPriceValue:number = 0;
    let totalQuantityValue:number = 0;

    for(let currentCartItem of this.cartItems){
      let price=parseInt(currentCartItem.price);
      totalPriceValue += currentCartItem.quantity * price;
      totalQuantityValue +=currentCartItem.quantity;
    }
    // publish the new values .. all subscribers will recieve the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

 //log cart data just for debugging
 this.logCartData(totalPriceValue, totalQuantityValue);

 }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
   // throw new Error('Method not implemented.');

  console.log('Contents of the cart');
  for(let tempCartItem of this.cartItems){
    let price=parseInt(tempCartItem.price);
    const subTotalPrice =tempCartItem.quantity *price;
    console.log(`name: ${tempCartItem.prod_name},
     quantity= ${tempCartItem.quantity}, price=${tempCartItem.price}, subTotalPrice=${subTotalPrice}`)
  }
  console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);

  console.log('------');
  }
 }
