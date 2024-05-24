import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsService } from '../../service/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrl: './adminproducts.component.css'
})
export class AdminproductsComponent {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  sortOrder: string ="";


  constructor(private productService:ProductsService,private router:Router,private snack:MatSnackBar){}

  ngOnInit():void{
    this.productService.getAllProducts().subscribe((data:Products[])=> {
      this.products = data;
      this.filteredProducts = data;
      
    })
  }


  goToUpdate(id:number){
    this.router.navigate(['products/update',id]);
  }

  deleteProduct(id:number){
    this.productService.deleteProductBasedOnProductID(id).subscribe(data =>{
      //alert("Product Deleted Successfully");
      this.snack.open('Product Deleted Successfully', 'Dismiss', {
        duration: 4000
      });
      //this.router.navigate(['admin']);
    })
  }


  goToAddProduct(){
    this.router.navigate(['products/add']);
  }

  applyFilter(event: Event): void {
    let searchTerm =(event.target as HTMLInputElement).value;
    searchTerm =  searchTerm.toLowerCase();
    this.filteredProducts=this.products.filter
    (product => product.name.toLowerCase().includes(searchTerm))
    this.sortProduct(this.sortOrder)
  }
  sortProduct(sortValue: string){
    this.sortOrder=sortValue;

    if(this.sortOrder === "priceLowHigh"){
      this.filteredProducts.sort((a,b) => a.price - b.price)
    }else if(this.sortOrder === "priceHighLow"){
      this.filteredProducts.sort((a,b) => b.price - a.price)
    }
  }




}
