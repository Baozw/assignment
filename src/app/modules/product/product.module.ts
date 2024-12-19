import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/product/product.page';
import {SharedModule} from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {reducer} from './product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effects';
import { ProductService } from '../services/product.service';
import { ProductDetail } from './pages/product/product-detail.page';

export const productRoutes: Routes = [
    {
        path: ':id',
        component: ProductPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
        StoreModule.forFeature('productState', reducer),
        EffectsModule.forFeature([
            ProductEffects
          ]),
    ],
    declarations: [
        ProductPage,
        ProductDetail
    ],
    providers: [ProductService]
})
export class ProductModule {
}
