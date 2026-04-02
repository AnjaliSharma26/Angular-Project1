import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'products', component: ProductsComponent },

    // Parameter route
    { path: 'products/:id', component: ProductDetailComponent },

    // Protected route
    {
        path: 'admin',
        loadComponent: () =>
            import('./pages/admin/admin').then(m => m.Admin),
        canActivate: [authGuard]
    },

    { path: '**', redirectTo: '' }
];