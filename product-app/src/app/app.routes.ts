import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    {
        path: 'products',
        component: ProductsPageComponent,
        children: [
            { path: 'add', component: AddProductPageComponent}
        ]
    },
    { path: 'details/:id', component: ProductDetailPageComponent},
    { path: '**', component: NotFoundPageComponent}
];
