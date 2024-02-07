import { Component, Input } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ProductInformation } from '../../Model/ProductInformation';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  @Input() selectedProduct!: ProductInformation;
  rating?: number;

  constructor(private productService: ProductService) { }

  submitReview() {
    if (this.selectedProduct && this.rating !== undefined) {
      this.productService.addReview(this.selectedProduct.productId, this.rating).subscribe({
        next: (data: any) => {
          console.log('Review submitted successfully', data);
          window.location.reload();
        },
        error: (error: any) => {
          console.error('Error submitting review', error)
        },
      });
    }
  }
}
