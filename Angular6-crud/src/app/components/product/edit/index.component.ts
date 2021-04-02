import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product';

@Component({
  templateUrl: './index.component.html',
})
export class ProductEditComponent {
  private productForm: FormGroup;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit() {
    var id = this.activeRoute.snapshot.params.id;
    this.productService.find(id).subscribe(
      res => {
        this.productForm = this.formBuilder.group({
          id: res.id,
          name: res.name,
          price: res.price,
          quantity: res.quantity,
        })
      },
      error => {
        console.log(error);
      }
    )
  }

  save() {
    this.productService.update(this.productForm.value).subscribe(
      res => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
