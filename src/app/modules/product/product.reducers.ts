import { Product } from './models/product.model';
import { ProductActionTypes, ProductActions } from './product.action';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface State extends EntityState<Product> {
  // additional state properties
  loading: boolean;
  error: any
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product:Product) => product.id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null
});


export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_GET: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case ProductActionTypes.PRODUCT_RETRIEVED: {
      return {
        ...adapter.addOne(action.payload.product, state),
        loading: false,
        error: null
      };
    }
    case ProductActionTypes.PRODUCTS_GET: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case ProductActionTypes.PRODUCTS_RETRIEVED: {
      return adapter.addMany(action.payload.products, state)
    }
    case ProductActionTypes.ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
    default: {
      return state;
    }
  }
}
