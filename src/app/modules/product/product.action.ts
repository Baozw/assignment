import { Action } from '@ngrx/store';
import { Product } from './models/product.model';
export enum ProductActionTypes {
    PRODUCT_GET = '[Product] GET',
    PRODUCT_RETRIEVED = '[Product] RETRIEVED',
    PRODUCTS_GET = '[Products] GET',
    PRODUCTS_RETRIEVED = '[Products] RETRIEVED',
    ERROR = 'Error'
  }

  export class ActionProductGet implements Action {
    readonly type = ProductActionTypes.PRODUCT_GET;
    constructor(readonly payload: {id: string}) { }
  }

  export class ActionProductRetrieved implements Action {
    readonly type = ProductActionTypes.PRODUCT_RETRIEVED;
    constructor(readonly payload: {product: Product}) { }
  }
  export class ActionProductsGet implements Action {
    readonly type = ProductActionTypes.PRODUCTS_GET;
    constructor() { }
  }

  export class ActionProductsRetrieved implements Action {
    readonly type = ProductActionTypes.PRODUCTS_RETRIEVED;
    constructor(readonly payload: {products: Product[]}) { }
  }
  export class ActionError implements Action {
    readonly type = ProductActionTypes.ERROR;
    constructor(readonly payload: any) { }
  }
  export type ProductActions =
  ActionProductGet | ActionProductRetrieved | ActionProductsGet | ActionProductsRetrieved | ActionError;

