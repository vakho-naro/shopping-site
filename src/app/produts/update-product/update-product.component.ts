import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private productServise: ProductsService) { }

  productId = 0;
  productDetails: Products;
  alert: boolean = false


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
      this.productServise.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData
      })
    })
  }

  updateProduct(form) {
    this.productServise.updateProduct(this.productId, this.productDetails).subscribe(data => {
          console.log("dataaa", data)
          this.alert = true;

    })
  }

  closeAlert() {
    this.alert = false;
  }
  
}
