import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/produts/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private productServise: ProductsService,
              private route: Router) { }

  categoryList: Category

  ngOnInit(): void {
    this.productServise.getCategories().subscribe(data => {
      this.categoryList = data;
    })
  }

  // showCategory(url, id) {
  //   this.route.navigate([url, id])
  // }

}
