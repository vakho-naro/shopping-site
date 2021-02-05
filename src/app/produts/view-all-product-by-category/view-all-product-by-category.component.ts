import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { ProductsService } from '../products.service';
import { Products } from '../products';



@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
             private productServise: ProductsService) { }

  searchCategory: Category;
  productList: Products;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data.id
      console.log("cccccc", data.id)
    })

    // this.searchCategory = this.activatedRoute.snapshot.params.id

    this.productServise.searchCategoryProduct(this.searchCategory).subscribe(data => {
      console.log("kkkkkkkkkkkkkkkkkk", data)
      this.productList = data
    })
  }
}
