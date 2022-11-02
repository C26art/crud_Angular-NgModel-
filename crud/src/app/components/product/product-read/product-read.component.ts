import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'nome', 'quantidade', 'fornecedor', 'validade', 'categoria', 'action']

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
