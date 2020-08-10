import {Component, Input, OnInit} from '@angular/core';
import {ImageView, ProductView} from "../admin.models";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss', '../admin.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: ProductView;

  // @Output() changedProduct: EventEmitter<ProductView> = new EventEmitter<ProductView>();

  constructor() {
  }

  addProductImage() {
    this.product.images.push(new ImageView(null));
  }

  deleteProductImage(image: ImageView) {
    this.product.images = this.product.images.filter(i => i != image);
  }


  ngOnInit(): void {
  }

}
