import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product:Products = new Products();


  constructor(private productService:ProductsService,private router:Router, private snackBar: MatSnackBar){}

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);

      this.snackBar.open('Product added Successfully', 'Dismiss', {
        duration: 4000
      });
      this.router.navigate(['admin/products']);
    })
  }



}
