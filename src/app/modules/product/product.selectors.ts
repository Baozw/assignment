import * as fromProduct  from './product.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// custom selectors
export const productState = createFeatureSelector<fromProduct.State>('productState');
// export const selectedRecords = createSelector(taskState, (state: TaskState) => state.tasks);
export const selectProduct = (id: string) => createSelector(productState, (state: fromProduct.State) => state.entities[id]);
export const selectError = createSelector(productState, (state: fromProduct.State) => state.error);

// entity selectors
export const selectors = fromProduct.adapter.getSelectors(productState);