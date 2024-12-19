import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.page.html'
})

export class ProductDetail {

   @Input() product : Observable<Product>;
    constructor() {
        
    }

}

