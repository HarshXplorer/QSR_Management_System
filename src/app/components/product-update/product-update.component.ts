import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  products: Products= new Products();

  productId!:number;

  constructor(private productservice:ProductsService,private route:ActivatedRoute,private router:Router){}

 

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['id'];
    this.productservice.getProductBasedOnProductID(this.productId).subscribe(data => {
      this.products = data;
    })
  }

  updateProduct(){
    this.productservice.updateProduct(this.products).subscribe(data => {
      this.products = data;
      console.log(data);
      this.router.navigate(['admin/products']);
    });
  }


  

}
