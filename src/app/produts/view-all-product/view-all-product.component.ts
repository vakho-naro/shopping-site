import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  constructor(private productServise: ProductsService) { }

  productList: Products

  ngOnInit(): void {
    this.productServise.getAllProduct().subscribe(data => {
      this.productList = data; 
      console.log("data", data)
    })
  }

}
