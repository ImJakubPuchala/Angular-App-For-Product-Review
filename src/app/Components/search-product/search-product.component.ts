import { Component, EventEmitter, Output } from '@angular/core';
import { ProductInformation } from '../../Model/ProductInformation';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  searchTerm: string = '';
  results: ProductInformation[] = [];
  @Output() productSelected = new EventEmitter<ProductInformation>();

  constructor(private productService: ProductService) { }

  search() {
    if (this.searchTerm) {
      this.productService.searchProducts(this.searchTerm).subscribe((data) => {
        this.results = data;
      });
    }
  }

  selectProduct(product: ProductInformation) {
    this.searchTerm = product.name;
    this.results = [];
    this.productSelected.emit(product);
  }
}
