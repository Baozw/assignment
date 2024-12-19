import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import * as fromProductReducer from '../../product.reducers';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ActionProductGet, ActionProductsGet } from '../../product.action';
import * as fromProductSelectors from '../../product.selectors';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {

    /**
        If you haven't already, I highly suggest reading the README.md
    */
   product$ : Observable<Product>;
    constructor(private route: ActivatedRoute,public store: Store<fromProductReducer.State>) {
        let id = this.route.snapshot.paramMap.get('id');
        //this.productState$ = this.store.select('productState');
        this.product$ = this.store.select(fromProductSelectors.selectProduct(id)).pipe(
            tap(product => {
                console.log(product);
                  if(!product){
                    this.store.dispatch(new ActionProductGet({id:id}));
                  }  
            })
        );
        
    }

    ngOnInit() {
        //this.store.dispatch(new ActionProductsGet());
    }

}

