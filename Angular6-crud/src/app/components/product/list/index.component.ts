import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product';

@Component({
  templateUrl: './index.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  ngOnInit() {
    this.loadData()
  }

  delete(id: string) {
    var res = confirm('Are your sure ?');
    if (res) {
      this.productService.delete(id).subscribe(res => {
        this.loadData();
      })
    }
  }

  edit(id: string) {
    this.router.navigate(['/edit/' + id]);
  }

  loadData() {
    this.productService.findAll().subscribe(res => {
      this.products = res;
    }, error => {
      alert(error)
    })
  }
}
