export interface ProductInformation {
  productId: number;
  name: string;
  eancode: string;
}

export interface AddReviewDto {
  productId: number;
  rating: number;
}
