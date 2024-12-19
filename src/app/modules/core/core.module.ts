import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/pages/landing/landing.page';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const appRoutes: Routes = [
    {
        path: 'landing',
        loadChildren: '@app/modules/landing/landing.module#LandingModule',
    },
    {
        path: 'products',
        loadChildren: '@app/modules/products/products.module#ProductsModule',
    },
    {
        path: 'product',
        loadChildren: '@app/modules/product/product.module#ProductModule',
    },
    { path: '**', redirectTo: 'landing' }
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot({}),

        EffectsModule.forRoot([]),

    ],
    exports: [
        RouterModule,
        HttpClientModule
    ],
    providers: [
    ]
})
export class CoreModule {
}