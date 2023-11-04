import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  @Input() review: number = 0;
  public reviewNumbers: number[] = []

  ngOnInit(): void {
    this.fillReview();
  }

  private fillReview(): void {
    for (let i = 1; i <= 5; i++) {
      this.reviewNumbers.push(i);
    }
  }

}
