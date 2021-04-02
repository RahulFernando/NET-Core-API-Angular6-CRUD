import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product';

@Component({
  templateUrl: './index.component.html',
})
export class ProductAddComponent {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id:'',
      name:'',
      price: 0,
      quantity: 0,
    })
  }

  save() {
    this.productService.create(this.productForm.value).subscribe(
      res => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
