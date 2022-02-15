import { Product } from "./product";

export class CartItem {
  id:number;
  prod_name:string;
  imageUrl:string;
  price:string;

  quantity:number;


  constructor(product:Product){
    this.id=product.id;
    this.prod_name=product.prod_name;
    this.price=product.price;
    this.imageUrl=product.imageUrl;

    this.quantity=1;
  }
}
