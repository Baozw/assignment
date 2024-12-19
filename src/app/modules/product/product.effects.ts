import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { Action } from '@ngrx/store';
import { ActionProductRetrieved,ActionError, ProductActionTypes, ProductActions, ActionProductGet, ActionProductsGet, ActionProductsRetrieved } from './product.action';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {
  }

  @Effect()
  getProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ActionProductGet>(ProductActionTypes.PRODUCT_GET),
    switchMap(action => {
      return this.productService.getProduct(action.payload.id).pipe(
        map(product => new ActionProductRetrieved({product: product})),
        catchError(error => of(new ActionError(error)))
      );
    })
  );
  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ActionProductsGet>(ProductActionTypes.PRODUCTS_GET),
    switchMap(action => {
      return this.productService.getProducts().pipe(
        map(products => new ActionProductsRetrieved({products:products})),
        catchError(error => of(new ActionError(error)))
      );
    })
  );
}
