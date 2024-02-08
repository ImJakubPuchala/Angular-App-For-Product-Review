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
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rating: number = 0;

  constructor(private productService: ProductService) { }

  setRating(index: number) {
    this.rating = index;
  }

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
