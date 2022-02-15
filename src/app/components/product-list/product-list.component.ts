import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CartItem } from '../cart-item';
import { Product } from '../product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  [x: string]: any;

  products:Product[];
  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(){
    this.listProducts();
  }
  listProducts(){
    this.productService.getProductList().subscribe(
    data=>{

      this.products = data;

    }

  );
  }
  addToCart(theProduct: Product){
    console.log(`Adding to cart: ${theProduct.prod_name},${theProduct.price}`);
  // TODO...do the real work
  const theCartItem= new CartItem(theProduct);

  this.cartService.addToCart(theCartItem);

  }
}
