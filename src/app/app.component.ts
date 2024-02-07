import { Component } from '@angular/core';
import { ProductInformation } from './Model/ProductInformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct?: ProductInformation; // Zmieniono typ na any

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }
}
