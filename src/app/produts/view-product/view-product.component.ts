import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  
  productId = 0;
  productDetail: Products;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id
    });

    this.productService.viewProduct(this.productId).subscribe(productData => {
      this.productDetail = productData;
      console.log(this.productDetail)
    })
  }

}
