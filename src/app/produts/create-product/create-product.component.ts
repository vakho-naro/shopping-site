import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  alert: boolean = false


  constructor(private productServise: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form) {

    let newProduct = {
    // id: 22,
    name: form.value.name,
    price: form.value.price ,
    description: form.value.description,
    rating: form.value.rating ,
    is_avialable: true ,
    category_id: form.value.category 
    }

    this.productServise.createProduct(newProduct).subscribe(data => {
      console.log("ddddddddd", data)
      this.alert = true;
    })

  }

  closeAlert() {
    this.alert = false;
  }

}
